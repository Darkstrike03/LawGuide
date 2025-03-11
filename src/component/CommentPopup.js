import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import "./CommentsPopup.css"; // Ensure to create this CSS file for styling

const CommentsPopup = ({ postId, onClose }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    const { data: commentsData, error } = await supabase
      .from("community_comments")
      .select("*, profiles(username, totalrep)")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching comments:", error);
      return;
    }
    setComments(commentsData);
  };

  const handleAddComment = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("You must be logged in to comment");

    const { error } = await supabase.from("community_comments").insert([
      {
        user_id: user.id,
        post_id: postId,
        content: newComment,
        upvotes: 0,
        downvotes: 0,
      },
    ]);

    if (error) {
      console.error("Error adding comment:", error);
      return;
    }
    setNewComment("");
    fetchComments();
  };

  const handleVoteComment = async (commentId, voteType) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("You must be logged in to vote");

    const columnToUpdate = voteType === "upvote" ? "upvotes" : "downvotes";

    const { error } = await supabase
      .from("community_comments")
      .update({ [columnToUpdate]: supabase.raw(`${columnToUpdate} + 1`) })
      .eq("id", commentId);

    if (error) {
      console.error("Voting error:", error);
      return;
    }

    fetchComments();
  };

  return (
    <div className="comments-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h3>Comments</h3>
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p><strong>{comment.profiles?.username || "Anonymous"}</strong> ({comment.profiles?.totalrep || 0} rep)</p>
              <p>{comment.content}</p>
              <span>{new Date(comment.created_at).toLocaleString()}</span>
              <div className="comment-voting">
                <button className="vote-btn upvote" onClick={() => handleVoteComment(comment.id, "upvote")}>
                  👍 {comment.upvotes}
                </button>
                <button className="vote-btn downvote" onClick={() => handleVoteComment(comment.id, "downvote")}>
                  👎 {comment.downvotes}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="comment-input">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CommentsPopup;
