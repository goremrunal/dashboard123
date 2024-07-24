import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const handleHomeClick = () => {
    if (isAuthenticated) {
      navigate('/');
    } else {
      navigate('/login'); // Redirect to login if not authenticated
    }
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="logo">
        <h1>CryptoDashboard</h1>
      </div>
      <nav className="nav">
        <button className="nav-button" onClick={handleHomeClick}>Home</button>
        {isAuthenticated ? (
          <button className="nav-button" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button className="nav-button" onClick={() => navigate('/login')}>Login</button>
            <button className="nav-button" onClick={() => navigate('/signup')}>Signup</button>
          </>
        )}
        <div className="toggle-switch" onClick={toggleDarkMode}>
          <span className="icon">{darkMode ? <FaSun /> : <FaMoon />}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;