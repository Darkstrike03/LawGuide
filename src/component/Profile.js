import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const defaultProfileImage = "https://via.placeholder.com/150"; // Placeholder image

  // Fetch authenticated user
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

  // Fetch user profile data
  const fetchProfileData = async (userId) => {
    try {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single();

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

  // Logout function
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
          <div className="profile-picture">
            <img src={profileData.avatar || defaultProfileImage} alt="Profile" />
          </div>
          <p><strong>Username:</strong> {profileData.username}</p>
          <p><strong>Registered On:</strong> {new Date(profileData.registered_at).toLocaleString()}</p>
          <p><strong>Last Activity:</strong> {new Date(profileData.last_activity).toLocaleString()}</p>
          <p><strong>Reputation:</strong> ⭐ {profileData.reputation}</p>
          <p><strong>Upvotes:</strong> {profileData.upvotes}</p>
          <p><strong>Downvotes:</strong> {profileData.downvotes}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Error loading profile.</p>
      )}
    </div>
  );
};

export default Profile;
