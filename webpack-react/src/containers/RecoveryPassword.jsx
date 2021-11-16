import React from 'react';
import '../styles/RecoveryPassword.scss';
import email from '../assets/icons/email.svg';

const RecoveryPassword = () => {
    return (
        <div class="login">
        <div className="form-container">
          <img src={logo} alt="logo" className="logo" />
    
          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
    
          <div className="email-image">
            <img src={email} alt="email" />
          </div>
    
          <button className="primary-button login-button">Login</button>
    
          <p className="resend">
            <span>Didn't receive the email?</span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    );
}

export default RecoveryPassword;