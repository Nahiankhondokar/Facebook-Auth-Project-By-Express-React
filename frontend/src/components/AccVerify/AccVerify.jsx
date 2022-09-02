import React, { Component } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { errorToaster, successToaster } from '../../utility/Toaster';
import axios from 'axios';
import './../../pages/ResetPassword/ResetPassword.scss';

class AccVerify extends Component {
    constructor(props){
        super(props);

        this.state = {
            input : {
                secretKey : ''
            }
        }

    }
  render() {

    // state value
    const { secretKey } = this.state.input;

    // token from params
    const { token, navigate } = this.props;

    // input value update
    const handleInputUpdate = async (e) => {
        e.preventDefault();

        this.setState((prev) => ({
            ...prev,
            input : {
                ...prev.iput,
                [e.target.name] : e.target.value
            }
        }));

    }


    // acc-verify form submit 
    const handleFormSubmit = (e) =>{
        e.preventDefault();

        // validation
        if(!secretKey){
            errorToaster('Missing Secret Key !');
        }else{

            try{
                axios.post('http://localhost:5050/api/users/acc-verify', {
                    token : token,
                    secretKey : this.state.input
                })
                .then(res => {
                    successToaster('Account Verify Sucssfully');
                    navigate('/login');
                }).catch((e) => {
                    errorToaster('Account Verify Failed')
                });

            }catch(e){
                errorToaster('Secret Key Not Match');
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
                                <input type="text" placeholder='Email or phone' className='login-input' disabled/>
                                <input type="password" placeholder='Password' className='login-input' disabled/>
                                <input type="submit" className='sbmt-btn' value="Log In" disabled/>
                                <Link to="/reset-password" href="#">Forgotten Password ?</Link>
                            </form>
                        </div>
                    </div>
               </div>

               <div className="reset-pass-area">
                    <div className="reset-pass-body shadow-sm">
                    <div className="title">
                        <h4>Verify Your Account</h4>
                    </div>
                    <hr />
                    <div className="form-body">
                        <p>Please check your email & enter your secret key for verifing your account.</p>
                        <form onSubmit={ handleFormSubmit } method="POST">
                            <input type="text" placeholder='Secret Key' className='input-area' name='secretKey' onChange={ handleInputUpdate } />
                            <hr />
                            <div className="sbmt-btns">
                                <button type='submit' className='btn btn-primary search'><b>Verify Now</b></button> 
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

// navigaiton , params
export function AccVerifyWithRouter(){
    const { token } = useParams();
    const navigate = useNavigate();

    return (<AccVerify token={token} navigate={navigate} />);
}

export default AccVerify;