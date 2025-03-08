import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const profilePictures = [
    "default1.png",
    "default2.jpg",
    "default3.jpg",
    "default4.jpg",
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setDisplayName(user.user_metadata?.display_name || "");
        setProfilePicture(user.user_metadata?.profile_picture || "default1.png");
      }
    };
    fetchUser();
  }, []);

  const updateProfile = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.updateUser({
      data: { profile_picture: profilePicture, display_name: displayName },
    });

    if (error) {
      setMessage("Error updating profile: " + error.message);
    } else {
      setMessage("Profile updated successfully!");
    }
    
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login"; // Redirect to login page after logout
  };

  return (
    <div className="profile-container">
      <div className="profile-tabs">
        <button
          className={!isEditing ? "active" : ""}
          onClick={() => setIsEditing(false)}
        >
          View
        </button>
        <button
          className={isEditing ? "active" : ""}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
      {user ? (
        <>
          {!isEditing ? (
            <>
              <div className="profile-picture">
                <img src={`/ppic/${profilePicture}`} alt="Profile" />
              </div>
              <p>Display Name: {displayName}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Display Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <div className="profile-picture">
                <img src={`/ppic/${profilePicture}`} alt="Profile" />
              </div>
              <div className="profile-picture-selection">
                {profilePictures.map((pic) => (
                  <img
                    key={pic}
                    src={`/ppic/${pic}`}
                    alt={pic}
                    className={profilePicture === pic ? "selected" : ""}
                    onClick={() => setProfilePicture(pic)}
                  />
                ))}
              </div>
              <button onClick={updateProfile} disabled={loading}>
                {loading ? "Updating..." : "Update Profile"}
              </button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
          <p>{message}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
