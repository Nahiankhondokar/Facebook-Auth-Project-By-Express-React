import axios from 'axios';
import React, { Component, useContext } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { errorToaster, successToaster } from '../../utility/Toaster';
import './ResetPassword.scss';

class ResetPassword extends Component {
    constructor(props){
        super(props);

        this.state = {
            input : {
                auth : ''
            }
        }
    }

  render() {

    // console.log(this.state.input);
    // input value update
    const handleInputUpdate = (e) => {
    
        this.setState((prev) => ({
            ...prev, 
            input : {
            ...prev.input,
            [e.target.name] : e.target.value
            }
        }));
        
    }

    // form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // validation
        if(this.state.input.auth == ''){
            errorToaster('Feild is required !')
        }else{

            try {

               if(this.state.input.auth.endsWith('.com')){
                axios.post('http://localhost:5050/api/users/find-user', this.state.input)
                .then(res => {
                    successToaster('valid user');
                    this.props.dispatch({ type : 'RESET_PASS_USER', payload : res.data.valid_user });
                    console.log(res.data.valid_user);
                    this.props.navigate('/reset-password/confirmed');
                })
                .catch();
               }else {
                errorToaster('Only email is accessable');
               }
                
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
                        <form onSubmit={handleFormSubmit} method="POST">
                            <input type="text" placeholder='Email Address or mobile number' className='input-area' name='auth' onChange={handleInputUpdate} />
                            <hr />
                            <div className="sbmt-btns">
                                <button className='btn cancel'><b>Cancel</b></button>
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
                    <li>???????????????</li>
                    <li>?????????????????????</li>
                    <li>??????????????????</li>
                    <li>??????????????????</li>
                    <li>Bahasa Indonesia</li>
                    <li>??????????????</li>
                    <li>??????(??????)</li>
                    <li>Bahasa Melayu</li>
                    <li>Espa??ol</li>
                    <li>Portugu??s (Brasil)</li>
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
                    <li>Pay Meta ?? 2022 </li>
                </ul>
                </div>
            </div>
        </div>
      </>
    )
  }
}
// navigation
export function ResetPasswordWithRouter (){

    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext);

    return <ResetPassword navigate={navigate} dispatch={dispatch} />
}
export default ResetPassword;