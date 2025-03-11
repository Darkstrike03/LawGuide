import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setIsLoggedIn(true);
        const { data: profileData, error } = await supabase
          .from('profiles')
          .select('avatar')
          .eq('id', user.id)
          .single();
        if (!error && profileData) {
          setProfilePicture(profileData.avatar || "https://via.placeholder.com/30");
        }
      }
    };
    checkUser();
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: '#343a40' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ color: 'white' }}>
          <img src={logo} alt="Logo" width={50} height={50} className="d-inline-block align-text-top" />
          <span style={{ fontFamily: 'Edwardian Script ITC', fontSize: '1.5em' }}>L</span>AW GUIDE
        </a>
        <button className="btn btn-outline-light" type="button">
          {isLoggedIn ? (
            <Link to="/profile" style={{ color: 'white' }}>
              <img
                src={profilePicture}
                alt="Profile"
                width={30}
                height={30}
                style={{ borderRadius: '50%' }}
              />
            </Link>
          ) : (
            <Link to="/login" style={{ color: 'white' }}>Login</Link>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
