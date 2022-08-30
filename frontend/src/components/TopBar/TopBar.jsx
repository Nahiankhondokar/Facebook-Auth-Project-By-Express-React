import React, { Component } from 'react';
import { BsFacebook } from "react-icons/bs";  
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";  
import { FiMonitor } from "react-icons/fi";  
import { BiHome } from "react-icons/bi";  
import { SiFacebookgaming } from "react-icons/si";  
import { CgMenuGridO } from "react-icons/cg";  
import { FaFacebookMessenger } from "react-icons/fa";  
import { MdNotifications, MdAccountCircle } from "react-icons/md"; 
import Image from './../../img/me.jpg'; 
import './TopBar.scss';

class TopBar extends Component {
  render() {
    return (
        <div className='fb-topbar-container shadow-sm'>
        <div className="fb-topbar-wrapper">
            <div className="fb-topbar-left">
                <div className="fb-topbar-logo">
                    <BsFacebook />
                </div>
                <div className="fb-search-area">
                    <form action="" className='fb-search-form-area'>
                        <AiOutlineSearch />
                        <input type="text" placeholder='Search Facebook'/>
                    </form>
                </div>
            </div>
            <div className="fb-topbar-middle">
                <div className="icons" title='Home'><AiFillHome /></div>
                <div className="icons" title='Watch'><FiMonitor /></div>
                <div className="icons" title='Marketplace'><BiHome /></div>
                <div className="icons" title='Gaming'><SiFacebookgaming /></div>
                
                
                
                
            </div>
            <div className="fb-topbat-right">
                <div className="icons">
                    <CgMenuGridO />
                </div>
                <div className="icons">
                    <FaFacebookMessenger />
                </div>
                <div className="icons">
                    <MdNotifications />
                </div>
                <div className="icons">
                    {/* <MdAccountCircle /> */}
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default TopBar;


