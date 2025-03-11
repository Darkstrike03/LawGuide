import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [profilePictures, setProfilePictures] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState("");

  useEffect(() => {
    const fetchProfilePictures = async () => {
      const { data, error } = await supabase.from("profile_pictures").select("url");
      if (error) {
        console.error("Error fetching profile pictures:", error.message);
      } else {
        setProfilePictures(data);
      }
    };
    fetchProfilePictures();
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Check if username already exists
      const { data: existingUser, error: checkError } = await supabase
        .from("profiles")
        .select("id")
        .eq("username", username)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        throw new Error("Error checking username availability.");
      }

      if (existingUser) {
        setMessage("Username already taken. Please choose another.");
        setLoading(false);
        return;
      }

      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        throw new Error(authError.message);
      }

      const user = authData.user;
      if (!user) {
        throw new Error("User creation failed. Please check your email for verification.");
      }

      // Insert user profile into the database
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: user.id,
          username,
          registered_at: new Date().toISOString(),
          last_activity: new Date().toISOString(),
          rank: "Newbie",
          avatar: selectedAvatar || "default_avatar_url_here",
        },
      ]);

      if (profileError) {
        throw new Error("Error creating profile: " + profileError.message);
      }

      setMessage("Sign-up successful! Check your email to confirm your account.");
    } catch (err) {
      setMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <p>Select a profile picture:</p>
            <div className="avatar-grid">
              {profilePictures.map((pic, index) => (
                <img
                  key={index}
                  src={pic.url}
                  alt="Avatar"
                  className={selectedAvatar === pic.url ? "selected-avatar" : "avatar"}
                  onClick={() => setSelectedAvatar(pic.url)}
                />
              ))}
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {message && <p>{message}</p>}
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
