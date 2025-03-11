import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const defaultProfileImage = "https://via.placeholder.com/150"; // Placeholder image

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error || !data.user) {
          setMessage("Error fetching user details.");
          setLoading(false);
          return;
        }
        setUser(data.user);
        fetchProfileData(data.user.id);
      } catch (err) {
        console.error("Auth error:", err);
        setMessage("Error fetching user details.");
      }
    };
    fetchUser();
  }, []);

  const fetchProfileData = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, username, avatar, registered_at, last_activity, totalrep, totalup, totaldown")
        .eq("id", userId)
        .single();

      if (error || !data) {
        console.error("Profile fetch error:", error);
        setMessage("Error loading profile.");
        return;
      }
      setProfileData(data);
    } catch (err) {
      console.error("Profile fetch error:", err);
      setMessage("Error loading profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="profile-container">
      {loading ? (
        <p>Loading profile...</p>
      ) : profileData ? (
        <>
          <div className="profile-header">
            <img
              src={profileData.avatar || defaultProfileImage}
              alt="Profile"
              className="profile-pic"
            />
            <h2>{profileData.username}</h2>
          </div>
          <div className="profile-details">
            <p><strong>Registered On:</strong> {new Date(profileData.registered_at).toLocaleString()}</p>
            <p><strong>Last Activity:</strong> {new Date(profileData.last_activity).toLocaleString()}</p>
            <p><strong>Reputation:</strong> ⭐ {profileData.totalrep}</p>
            <p><strong>Upvotes:</strong> 👍 {profileData.totalup}</p>
            <p><strong>Downvotes:</strong> 👎 {profileData.totaldown}</p>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>{message || "Error loading profile."}</p>
      )}
    </div>
  );
};

export default Profile;
