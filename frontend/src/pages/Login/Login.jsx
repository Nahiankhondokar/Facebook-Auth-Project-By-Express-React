import React, { Component } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Register from '../Register/Register';
import './Login.scss'; 

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      regModal : false,

    }

  }
  render() {

    // state
    const { regModal } = this.state;

    // state update
    const handleRegModalShow = () => {
      this.setState((prev) => ({
          ...prev, regModal : true
      }));
    }
    

    // state update
    const handleRegModalHide = () => {
      this.setState((prev) => ({
          ...prev, regModal : false
      }));
    }

    return (
      <>
      <Register regModal={regModal} handleRegModalHide={handleRegModalHide} />
      <div className='login-container'>
        <div className="login-wrapper">
          {/* left side */}
          <div className="login-wrapper-left">
            <img className='fb-logo' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            <span className='fb-logo-desc'>Facebook helps you connect and share with the people in your life.</span>
          </div>
  
          {/* right side */}
          <div className="login-wrapper-right">
            <div className="login-form-area shadow">
                <form action="" className='login-form'>
                  <input className='login-form-input' type="text" placeholder='Email address or  phone number'/>
                  <input className='login-form-input'  type="text" placeholder='Password'/>
                  <button type='submit' className='login-form-sbmt-btn'>Log In</button>
                </form>
                <Link to="/reset-password" className='forgot-pass'>
                  Forgotten password ?
                </Link>
                <hr />
                <div className="create-new-acc-btn-area">
                  <button type="button" onClick={ handleRegModalShow } className='new-acc-btn'>Create New Account</button>
                </div>
            </div>
  
              <p className='create-page'><a href='#'>Create a Page</a> for a celebrity, brand or business.</p>
  
          </div>
  
  
        </div>
  
      </div>
  
      
                  {/* Footer */}
      <div className="login-footer-area">
  
      <div className="login-wrapper">
        <div className="login-footer-one">
          <ul>
            <li>English (UK) </li>
            <li>বাংলা</li>
            <li>অসমীয়া</li>
            <li>हिन्दी</li>
            <li>नेपाली</li>
            <li>Bahasa Indonesia</li>
            <li>العربية</li>
            <li>中文(简体)</li>
            <li>Bahasa Melayu</li>
            <li>Español</li>
            <li>Português (Brasil)</li>
            <li className='plus-icos'><BsPlusSquare /></li>
          </ul>
          
        </div>
        <hr className='footer-hr'/>
        <div className="login-footer-two">
          <ul>
            <li>Sign UP</li>
            <li>LogIn</li>
            <li>Messenger Lite</li>
            <li>Facebook</li>
            <li>Watch</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Pay</li>
            <li>Oculus</li>
            <li>Portal</li>
            <li>Instagram</li>
            <li>Bulletin</li>
            <li>Local</li>
            <li>Fundraisers</li>
            <li>ServicesVoting</li>
            <li>Information</li>
            <li>Centre</li> <br />
            <li>Groups</li>
            <li>About</li>
            <li>Createad</li>
            <li>CreatePage</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>AdChoices</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Contact</li>
            <li>uploading</li>
            <li>and non-users</li>
          </ul>
        </div>
        <div className="login-footer-three">
          <ul>
            <li>Pay Meta © 2022 </li>
          </ul>
        </div>
      </div>
      </div>
  
  
      </>
    )
  }
}
export default Login;
