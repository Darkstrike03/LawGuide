import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log("Attempting login...");

    try {
      let { data: user, error } = await supabase.auth.signInWithPassword({
        email: identifier.includes("@") ? identifier : null,
        password,
      });

      if (error && !identifier.includes("@")) {
        // If email login fails, try username login
        const { data: userByUsername, error: usernameError } = await supabase
          .from("profiles")
          .select("id, email")
          .eq("username", identifier)
          .single();

        if (userByUsername) {
          ({ data: user, error } = await supabase.auth.signInWithPassword({
            email: userByUsername.email,
            password,
          }));
        } else {
          error = usernameError;
        }
      }

      if (error) {
        console.error("Login error:", error);
        setMessage("Error logging in: " + error.message);
      } else {
        console.log("User logged in");
        setMessage("Login successful!");
        alert("Login successful!");
        navigate("/profile");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setMessage("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
