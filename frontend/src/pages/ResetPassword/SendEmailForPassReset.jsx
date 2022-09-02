import React, { Component, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsPlusSquare } from "react-icons/bs";
import './ResetPassword.scss';
import { errorToaster, successToaster } from '../../utility/Toaster';
import axios from 'axios';
import UserContext from '../../context/UserContext';

class SendEmailForPassReset extends Component {

    constructor(props){
        super(props);

        this.state = {
            input : {
                confm_pass : '',
                new_pass : '', 
                id : ''
            }
        }
    }

  render() {

    // console.log(this.state.input.id);

    // state value
    const { old_pass , new_pass, confm_pass } = this.state.input;

     // input value update
     const handleInputUpdate = (e) => {
    
        this.setState((prev) => ({
            ...prev, 
            input : {
                ...prev.input,
                id : this.props.user._id,
                [e.target.name] : e.target.value
            }
        }));
        
    }

    // form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // validation
        if(!new_pass || !confm_pass){
            errorToaster('Feild is required !')
        }else if(new_pass != confm_pass){
            errorToaster('Password Does not Match !')
        }else{

            try {

                axios.post('http://localhost:5050/api/users/reset-password', this.state.input)
                .then(res => {
                    successToaster('Password Changed Successfully');
                    this.props.navigate('/login');
                })
                .catch(() => {
                    errorToaster('Reset password failed');
                });
                
            } catch (error) {
                errorToaster('Request Failed');
            }
        }

    }

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
                            <form action='' className='login-form' method="POST">
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
                        <h4>Password Reset</h4>
                    </div>
                    <hr />
                    <div className="form-body">
                        <form onSubmit={handleFormSubmit} method="POST">
                            <input type="text" placeholder='New Password' className='input-area' name='new_pass' onChange={handleInputUpdate} />
                            <input type="text" placeholder='Confirmed Password' className='input-area' name='confm_pass' onChange={handleInputUpdate} />
                            <div className="sbmt-btns">
                                <Link to="/login" className='btn cancel'><b>Cancel</b></Link>
                                <button type='submit' className='btn btn-primary search'><b>Continue</b></button> 
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

// navigate
export function SendEmailForPassResetWithRouter() {

    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    return <SendEmailForPassReset navigate={navigate} user={user} />

}
export default SendEmailForPassReset;