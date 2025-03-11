import { supabase } from "../supabaseClient";

// Function to handle voting
export const voteOnPost = async (userId, postId, voteType) => {
  if (!userId || !postId || !voteType) return { error: "Invalid request" };

  const { data: existingVote, error: voteError } = await supabase
    .from("community_votes")
    .select("*")
    .eq("user_id", userId)
    .eq("post_id", postId)
    .single();

  if (voteError && voteError.code !== "PGRST116") {
    console.error("Vote fetch error:", voteError);
    return { error: "Error checking vote" };
  }

  if (existingVote) {
    if (existingVote.vote_type === voteType) {
      return { message: "Already voted this way" };
    } else {
      await supabase
        .from("community_votes")
        .update({ vote_type: voteType })
        .eq("id", existingVote.id);
    }
  } else {
    await supabase.from("community_votes").insert([
      { user_id: userId, post_id: postId, vote_type: voteType },
    ]);
  }

  return await updatePostVotes(postId);
};

// Function to add a new comment
export const addComment = async (postId, userId, content) => {
  if (!postId || !userId || !content) return { error: "Invalid request" };

  const { data, error } = await supabase.from("community_comments").insert([
    {
      post_id: postId,
      user_id: userId,
      content: content,
    },
  ]);

  if (error) {
    console.error("Error adding comment:", error);
    return { error: "Failed to add comment" };
  }

  return { message: "Comment added successfully", data };
};

// Function to update votes and reputation
export const updatePostVotes = async (postId) => {
  const { data: upvotes } = await supabase
    .from("community_votes")
    .select("*")
    .eq("post_id", postId)
    .eq("vote_type", "upvote");

  const { data: downvotes } = await supabase
    .from("community_votes")
    .select("*")
    .eq("post_id", postId)
    .eq("vote_type", "downvote");

  const totalUpvotes = upvotes?.length || 0;
  const totalDownvotes = downvotes?.length || 0;

  await supabase
    .from("community_post")
    .update({ upvotes: totalUpvotes, downvotes: totalDownvotes })
    .eq("id", postId);

  const { data: postData } = await supabase
    .from("community_post")
    .select("user_id")
    .eq("id", postId)
    .single();

  if (!postData) return { error: "Post not found" };

  const postOwnerId = postData.user_id;

  const { data: userPosts } = await supabase
    .from("community_post")
    .select("upvotes, downvotes")
    .eq("user_id", postOwnerId);

  const totalUserUpvotes = userPosts.reduce((acc, post) => acc + post.upvotes, 0);
  const totalUserDownvotes = userPosts.reduce((acc, post) => acc + post.downvotes, 0);
  const totalReputation = Math.floor(totalUserUpvotes / 10);

  await supabase
    .from("profiles")
    .update({ totalup: totalUserUpvotes, totaldown: totalUserDownvotes, totalrep: totalReputation })
    .eq("id", postOwnerId);

  return { message: "Vote updated successfully", totalUpvotes, totalDownvotes, totalReputation };
};
