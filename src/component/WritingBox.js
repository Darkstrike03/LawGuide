import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import "./WritingBox.css";

const WritingBox = () => {
  const [postContent, setPostContent] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/30"); // Default profile pic
  const [user, setUser] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        fetchProfilePic(user.id);
      }
    };
    fetchUser();
  }, []);

  const fetchProfilePic = async (userId) => {
    const { data: profileData, error } = await supabase
      .from("profiles")
      .select("avatar")
      .eq("id", userId)
      .single();

    if (!error && profileData) {
      setProfilePic(profileData.avatar || "https://via.placeholder.com/30");
    }
  };

  const handlePostSubmit = async () => {
    if (!postContent.trim() || !postTitle.trim() || !user) return;

    const { error } = await supabase.from("community_post").insert([
      {
        id: crypto.randomUUID(),
        user_id: user.id,
        title: postTitle,
        content: postContent,
        created_at: new Date(),
        upvotes: 0,
        downvotes: 0,
        reputation: 0,
        parent_id: null,
      },
    ]);

    if (error) {
      console.error("Error posting:", error.message);
    } else {
      setPostContent("");
      setPostTitle("");
      setIsExpanded(false); // Collapse after posting
      window.location.reload(); // Refresh page to show new post
    }
  };

  return (
    <div className={`card02 ${isExpanded ? "expanded" : ""}`}>
      <div
        className={`writing-box ${isExpanded ? "expanded" : ""}`}
        onClick={() => setIsExpanded(true)}
      >
        <img src={profilePic} alt="Profile" className="profile-picture" />
        <div className="writing-inputs">
          {isExpanded && (
            <input
              type="text"
              className="title-area"
              placeholder="Title..."
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          )}
          <textarea
            className="writing-area"
            placeholder="Write something..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
      </div>
      {isExpanded && (
        <button className="post-button" onClick={handlePostSubmit}>
          Post
        </button>
      )}
    </div>
  );
};

export default WritingBox;
