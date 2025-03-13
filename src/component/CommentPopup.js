import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import "./CommentsPopup.css"; // Ensure this CSS file exists for styling
import UpvoteDownvote from "./UpvoteDownvote"; // Correct import

const CommentsPopup = ({ postId, onClose }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch Comments with User Details
  useEffect(() => {
    const fetchComments = async () => {
      console.log("fetchComments called with postId:", postId);

      const { data: hcomments, error } = await supabase
        .from("community_comments")
        .select(`
          id, 
          post_id, 
          user_id, 
          content, 
          created_at, 
          upvotes, 
          downvotes, 
          profiles(username, avatar, totalrep)  
        `)
        .eq("post_id", postId)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching comments:", error);
      } else {
        setComments(hcomments);
      }
    };

    fetchComments();
  }, [postId]);

  // Handle Adding a New Comment
  const handleAddComment = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("You must be logged in to comment");

    console.log("handleAddComment called with:", { userId: user.id, postId, content: newComment });

    const { data, error } = await supabase.from("community_comments").insert([
      {
        user_id: user.id,
        post_id: postId,
        content: newComment,
        upvotes: 0,
        downvotes: 0,
      },
    ]).select();

    if (error) {
      console.error("Error adding comment:", error);
    } else {
      setNewComment("");
      setComments((prev) => [...prev, data[0]]);
    }
  };

  return (
    <div className="comments-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h3>Comments</h3>
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>
                <strong>{comment.profiles?.username ?? "Anonymous"}</strong> 
                ({comment.profiles?.totalrep ?? 0} rep)
              </p>
              <p>{comment.content}</p>
              <span>{new Date(comment.created_at).toLocaleString()}</span>

              {/* Use UpvoteDownvote Component */}
              {/*<UpvoteDownvote 
                itemId={comment.id} 
                itemType="comment" // Specifies it's a comment
              />*/}
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
