import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profilePictures, setProfilePictures] = useState([]); // Store profile picture options
  const [reputation, setReputation] = useState(0); // Store user reputation
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setDisplayName(user.user_metadata?.display_name || "");
        setProfilePicture(user.user_metadata?.profile_picture || "");
        fetchReputation(user.id); // Fetch reputation from database
      }
    };
    fetchUser();
  }, []);

  // Fetch profile picture options from Supabase
  useEffect(() => {
    const fetchProfilePictures = async () => {
      const { data, error } = await supabase.from("profile_pictures").select("url");
      if (!error) {
        setProfilePictures(data.map(pic => pic.url)); // Store URLs in state
      }
    };
    fetchProfilePictures();
  }, []);

  // Fetch user reputation
  const fetchReputation = async (userId) => {
    const { data, error } = await supabase.from("users").select("reputation").eq("id", userId).single();
    if (!error) {
      setReputation(data.reputation);
    }
  };

  // Update profile in Supabase
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

  // Handle logout
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
                <img src={profilePicture} alt="Profile" />
              </div>
              <p>Display Name: {displayName}</p>
              <p>Reputation: ⭐ {reputation}</p>
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
                <img src={profilePicture} alt="Profile" />
              </div>

              <div className="profile-picture-selection">
                {profilePictures.map((pic) => (
                  <img
                    key={pic}
                    src={pic}
                    alt="Profile Option"
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
