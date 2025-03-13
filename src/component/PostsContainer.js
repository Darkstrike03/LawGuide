import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import CommentPopup from "./CommentPopup";
import UpvoteDownvote from "./UpvoteDownvote";
import "./PostsContainer.css";

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data: postsData } = await supabase
      .from("community_post")
      .select("*")
      .order("created_at", { ascending: false });

    if (!postsData) return;

    const postsWithDetails = await Promise.all(
      postsData.map(async (post) => {
        const { data: userData } = await supabase
          .from("profiles")
          .select("username, avatar, rank, totalrep")
          .eq("id", post.user_id)
          .single();
        
        const { data: comments } = await supabase
          .from("community_comments")
          .select("content, created_at, user_id")
          .eq("post_id", post.id)
          .order("created_at", { ascending: true })
          .limit(1);

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

  return (
    <div className="card04">
      <div className="posts-container">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={post.user.avatar || "https://via.placeholder.com/30"} alt="Profile" className="profile-pic" />
                <div>
                  <p className="username">{post.user.username || "Anonymous"}</p>
                  <p className="user-info">Reputation: {post.user.totalrep || 0} | Rank: {post.user.rank}</p>
                </div>
                <p className="post-time">{new Date(post.created_at).toLocaleString()}</p>
              </div>

              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-text">{post.content}</p>
              </div>

              <div className="post-actions">
                {/*<UpvoteDownvote postId={post.id} />*/}
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
      {selectedPost && <CommentPopup postId={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  );
};

export default PostsContainer;
