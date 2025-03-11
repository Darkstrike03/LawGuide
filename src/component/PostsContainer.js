import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { voteOnPost } from "./Funccom"; 
import CommentPopup from "./CommentPopup"; // Import CommentPopup
import "./PostsContainer.css";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // To track which post is clicked

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data: postsData, error } = await supabase
      .from("community_post")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error.message);
      return;
    }

    // Fetch user details & first comment for each post
    const postsWithDetails = await Promise.all(
      postsData.map(async (post) => {
        // Fetch user info
        const { data: userData } = await supabase
          .from("profiles")
          .select("username, avatar, rank, totalrep")
          .eq("id", post.user_id)
          .single();

        // Fetch first comment
        const { data: comments } = await supabase
          .from("community_comments")
          .select("content, created_at, user_id")
          .eq("post_id", post.id)
          .order("created_at", { ascending: true })
          .limit(1);

        // Fetch commenter info (for first comment)
        let firstComment = comments?.[0] || null;
        if (firstComment) {
          const { data: commenterData } = await supabase
            .from("profiles")
            .select("username")
            .eq("id", firstComment.user_id)
            .single();
          firstComment.username = commenterData?.username || "Unknown";
        }

        return { ...post, user: userData || {}, firstComment };
      })
    );

    setPosts(postsWithDetails);
  };

  const handleVote = async (postId, voteType) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return alert("You must be logged in to vote");

    const result = await voteOnPost(user.id, postId, voteType);
    if (result.error) console.error("Voting error:", result.error);
    fetchPosts(); // Refresh posts to update votes
  };

  return (
    <div className="card04">
      <div className="posts-container">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              {/* User Info */}
              <div className="post-header">
                <img src={post.user.avatar || "https://via.placeholder.com/30"} alt="Profile" className="profile-pic" />
                <div>
                  <p className="username">{post.user.username || "Anonymous"}</p>
                  <p className="user-info">Reputation: {post.user.totalrep || 0} | Rank: {post.user.rank}</p>
                </div>
                <p className="post-time">{new Date(post.created_at).toLocaleString()}</p>
              </div>

              {/* Post Content */}
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-text">{post.content}</p>
              </div>

              {/* Voting & Comments */}
              <div className="post-actions">
                <button className="vote-btn upvote" onClick={() => handleVote(post.id, "upvote")}>
                  👍 {post.upvotes}
                </button>
                <button className="vote-btn downvote" onClick={() => handleVote(post.id, "downvote")}>
                  👎 {post.downvotes}
                </button>

                {/* Show first comment and open popup on click */}
                <button className="comment-btn" onClick={() => setSelectedPost(post.id)}>
                  💬 {post.firstComment 
                      ? `"${post.firstComment.content}" - ${post.firstComment.username}` 
                      : "No comments yet"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Show Comment Popup when a post is clicked */}
      {selectedPost && (
        <CommentPopup 
          postId={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </div>
  );
};

export default PostsContainer;
