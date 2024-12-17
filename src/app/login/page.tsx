'use client'
import '../login/page.css'
import React from 'react';

const Login = () => {
  return (
    <div className="container">
        <div className="login-image">
        <img src="../login.png" alt="Illustration" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <a href="#" className="forgot">Forgot Password</a>
        <button className="login-button">Login</button>
        <p>
          Don't have account? <a href="#">Register</a>
        </p>
      </div>
      
     
    </div>
  );
};

export default Login;
