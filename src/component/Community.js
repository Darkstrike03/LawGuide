import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import WritingBox from "./WritingBox";
import LinksContainer from "./LinksContainer";
import PostsContainer from "./PostsContainer";
import "./Community.css"; // Import CSS for styling

const Community = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div className="community-container">
      <div className="left-card">
        <WritingBox />
        <PostsContainer />
      </div>
      <div className="right-card">
        <LinksContainer />
      </div>
    </div>
  );
};

export default Community;
