import axios from 'axios';
import React, { Component } from 'react';
import { BsPlusSquare } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { errorToaster, successToaster } from '../../utility/Toaster';
import Register from '../Register/Register';
import cookie from 'js-cookie';
import './Login.scss'; 
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      regModal : false,
      input : {
        auth : '',
        password : ''
      }
    }

  }
  render() {
  // console.log(this.state.input);
    // state
    const { regModal } = this.state;
    const { auth, password } = this.state.input;

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
    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      
     try {

      if( !auth || !password ){
          errorToaster('All feilds are required');
      }else {
        await axios.post('http://localhost:5050/api/users/login', this.state.input)
        .then(res => {
          console.log(res.data.user.isVerified);

          // authentication check
          if(res.data.user.isVerified){
            cookie.set('token', res.data.token);
            successToaster('Login Completed');
            this.props.dispatch({ type : "LOGIN_USER_SUCCESSS", payload : res.data.user });
            this.props.navigation('/');
          }else{
            errorToaster('Verify your account ?');
          }

        }).catch((e) => {
          errorToaster('axios request failed');
        });
      }
      
     } catch (error) {
      console.log(error);
     }

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
                <form onSubmit={handleLoginSubmit} className='login-form' method='POST'>
                  <input className='login-form-input' type="text" placeholder='Email address or  phone number' name='auth' onChange={ handleInputUpdate } />
                  <input className='login-form-input'  type="text" placeholder='Password' name='password' onChange={ handleInputUpdate }/>
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
  
              <p className='create-page'>
                <a href='#'>Create a Page</a> for a celebrity, brand or business.
              </p>
  
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

// this function for navigation system in class components
export function LoginWithRouter() {
  // navigate
  const navigation = useNavigate();
  // auth context
  const { dispatch } = useContext(UserContext);

  return <Login navigation={navigation} dispatch={dispatch} />;
}

export default Login;
