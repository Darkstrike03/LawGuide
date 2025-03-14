import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import WritingBox from "./WritingBox";
import LinksContainer from "./LinksContainer";
import PostsContainer from "./PostsContainer";
import "./Community.css"; // Import CSS for styling

const Community = () => {
  const navigate = useNavigate();
  const [showRightCard, setShowRightCard] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const toggleRightCard = () => {
    setShowRightCard(!showRightCard);
  };

  return (
    <div className="community-container">
      <div className="left-card">
        <WritingBox />
        <PostsContainer />
      </div>
      <div className={`right-card ${showRightCard ? 'see' : ''}`}>
        <LinksContainer />
      </div>
      <button className="toggle-right-card-btn" onClick={toggleRightCard}>
        {showRightCard ? 'Hide' : 'See'} RANKS
      </button>
    </div>
  );
};

export default Community;
