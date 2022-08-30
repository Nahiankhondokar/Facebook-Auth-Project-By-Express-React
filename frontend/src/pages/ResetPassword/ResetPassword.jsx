import React, { Component } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './ResetPassword.scss';

class ResetPassword extends Component {
  render() {
    return (
      <>
        <div className='reset-pass-container'>
            <div className="reset-pass-wrapper">
               <div className="top-bar shadow-sm">
                    <div className="reset-pass-topbar">
                        <div className="top-bar-logo">
                            <img src="https://res.cloudinary.com/jerrick/image/upload/v1624628212/60d5dbf40f3e87001efa16c1.png" alt="" />
                        </div>
                        <div className="top-bar-login-area">
                            <form action="" className='login-form'>
                                <input type="text" placeholder='Email or phone' className='login-input'/>
                                <input type="password" placeholder='Password' className='login-input'/>
                                <input type="submit" className='sbmt-btn' value="Log In"/>
                                <Link to="/reset-password" href="#">Forgotten Password ?</Link>
                            </form>
                        </div>
                    </div>
               </div>

               <div className="reset-pass-area">
                    <div className="reset-pass-body shadow-sm">
                    <div className="title">
                        <h4>Find Your Account</h4>
                    </div>
                    <hr />
                    <div className="form-body">
                        <p>Please enter your email address or mobile number to search for your account.</p>
                        <form action="">
                            <input type="text" placeholder='Email Address or mobile number' className='input-area'/>
                            <hr />
                            <div className="sbmt-btns">
                                <button type='submit' className='btn cancel'><b>Cancel</b></button>
                                <button type='submit' className='btn btn-primary search'><b>Search</b></button> 
                            </div>
                        </form>
                    </div>
                    </div>
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
export default ResetPassword;