import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { voteOnPost, voteOnComment } from "./Funccom"; 

const UpvoteDownvote = ({ itemId, itemType }) => {
  const [votes, setVotes] = useState({ upvotes: 0, downvotes: 0 });

  useEffect(() => {
    if (itemId) {
      fetchVotes();
    }
  }, [itemId]);

  const fetchVotes = async () => {
    console.log("fetchVotes called with:", { itemId, itemType });

    const { data: item, error } = await supabase
      .from(itemType === "post" ? "community_post" : "community_comments")
      .select("upvotes, downvotes")
      .eq("id", itemId)
      .single();
    if (error) {
      console.error("Error fetching votes:", error);
    } else if (item) {
      setVotes({ upvotes: item.upvotes, downvotes: item.downvotes });
    }
  };

  const handleVote = async (voteType) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("You must be logged in to vote");

    console.log("handleVote called with:", { userId: user.id, itemId, voteType });

    const result = itemType === "post"
      ? await voteOnPost(user.id, itemId, voteType)
      : await voteOnComment(user.id, itemId, voteType);
    if (!result.error) fetchVotes();
  };

  return (
    <div className="vote-container">
      <button className="vote-btn upvote" onClick={() => handleVote("upvote")}>
        👍 {votes.upvotes}
      </button>
      <button className="vote-btn downvote" onClick={() => handleVote("downvote")}>
        👎 {votes.downvotes}
      </button>
    </div>
  );
};

export default UpvoteDownvote;