import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TataSteel from './TataSteel';
import './App.css';

function LoginSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignin, setShowSignin] = useState(false);
  const [showSignupButton, setShowSignupButton] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/signup", { email, password });
      alert('Signup successful');
      setEmail('');
      setPassword('');
      setShowSignin(true);
      setShowSignupButton(true);
    } catch (error) {
      console.error(error);
      alert(error.response?.data || 'Signup failed');
    }
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signin', { email, password });
      alert('Signin successful');
      // After signin success, navigate to TataSteel page
      navigate('/tatasteel');
    } catch (error) {
      console.error(error);
      alert(error.response?.data || 'Signin failed');
    }
  };

  const handleShowSignup = () => {
    setShowSignin(false);
    setShowSignupButton(false);
    setEmail('');
    setPassword('');
  };

  const handleShowSignIn = () => {
    setShowSignin(true);
    setShowSignupButton(true);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <h1>TataSteel</h1>

      <div className="marquee">
        <p>Registration is Open! Join Tata Steel Today!</p>
      </div>

      {!showSignin ? (
        <>
          <h2>Signup</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Sign Up</button>
          <div className="button-container">
            <p>Already Have an Account?</p>
            <button onClick={handleShowSignIn}>Sign In</button>
          </div>
        </>
      ) : (
        <div>
          <h2>Signin</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignin}>Sign In</button>
          {showSignupButton && (
            <div className="button-container">
              <button onClick={handleShowSignup}>Go back to Sign Up</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/tatasteel" element={<TataSteel />} />
      </Routes>
    </Router>
  );
}

export default App;
