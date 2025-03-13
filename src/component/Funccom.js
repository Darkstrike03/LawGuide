import { supabase } from "../supabaseClient";

// Voting logic for posts
export const voteOnPost = async (userId, postId, voteType) => {
  if (!userId || !postId || !voteType) return { error: "Invalid request" };

  console.log("voteOnPost called with:", { userId, postId, voteType });

  const { data: existingVote, error: existingVoteError } = await supabase
    .from("community_votes")
    .select("*")
    .eq("user_id", userId)
    .eq("post_id", postId)
    .single();

  if (existingVoteError) {
    console.error("Error fetching existing vote:", existingVoteError);
  }

  if (existingVote) {
    if (existingVote.vote_type === voteType) {
      await supabase.from("community_votes").delete().eq("id", existingVote.id);
    } else {
      await supabase.from("community_votes").update({ vote_type: voteType }).eq("id", existingVote.id);
    }
  } else {
    await supabase.from("community_votes").insert([{ user_id: userId, post_id: postId, vote_type: voteType }]);
  }

  return await updatePostVoteCounts(postId);
};

// Updating post vote counts
export const updatePostVoteCounts = async (postId) => {
  const { count: upvoteCount, error: upvoteError } = await supabase
    .from("community_votes")
    .select("*", { count: "exact" })
    .eq("post_id", postId)
    .eq("vote_type", "upvote");

  if (upvoteError) {
    console.error("Error fetching upvote count:", upvoteError);
  }

  const { count: downvoteCount, error: downvoteError } = await supabase
    .from("community_votes")
    .select("*", { count: "exact" })
    .eq("post_id", postId)
    .eq("vote_type", "downvote");

  if (downvoteError) {
    console.error("Error fetching downvote count:", downvoteError);
  }

  await supabase
    .from("community_post")
    .update({ upvotes: upvoteCount || 0, downvotes: downvoteCount || 0 })
    .eq("id", postId);
  
  return { message: "Post votes updated successfully" };
};

// Voting logic for comments
export const voteOnComment = async (userId, commentId, voteType) => {
  if (!userId || !commentId || !voteType) return { error: "Invalid request" };

  console.log("voteOnComment called with:", { userId, commentId, voteType });

  const { data: existingVote, error: existingVoteError } = await supabase
    .from("community_votes")
    .select("*")
    .eq("user_id", userId)
    .eq("comment_id", commentId)
    .single();

  if (existingVoteError) {
    console.error("Error fetching existing vote:", existingVoteError);
  }

  if (existingVote) {
    if (existingVote.vote_type === voteType) {
      await supabase.from("community_votes").delete().eq("id", existingVote.id);
    } else {
      await supabase.from("community_votes").update({ vote_type: voteType }).eq("id", existingVote.id);
    }
  } else {
    await supabase.from("community_votes").insert([{ user_id: userId, comment_id: commentId, vote_type: voteType }]);
  }

  return await updateCommentVoteCounts(commentId);
};

// Updating comment vote counts
export const updateCommentVoteCounts = async (commentId) => {
  const { count: upvoteCount, error: upvoteError } = await supabase
    .from("community_votes")
    .select("*", { count: "exact" })
    .eq("comment_id", commentId)
    .eq("vote_type", "upvote");

  if (upvoteError) {
    console.error("Error fetching upvote count:", upvoteError);
  }

  const { count: downvoteCount, error: downvoteError } = await supabase
    .from("community_votes")
    .select("*", { count: "exact" })
    .eq("comment_id", commentId)
    .eq("vote_type", "downvote");

  if (downvoteError) {
    console.error("Error fetching downvote count:", downvoteError);
  }

  await supabase
    .from("community_comments")
    .update({ upvotes: upvoteCount || 0, downvotes: downvoteCount || 0 })
    .eq("id", commentId);
  
  return { message: "Comment votes updated successfully" };
};
