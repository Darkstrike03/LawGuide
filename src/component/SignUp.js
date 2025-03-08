import { useState } from "react";
import { supabase } from "../supabaseClient"; // Ensure the correct path
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import "./Login.css"; // Reuse the same CSS file

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });

    if (error) {
      setMessage("Error signing up: " + error.message);
    } else {
      setMessage("Sign-up successful! Please check your email to confirm your account.");
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
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
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
