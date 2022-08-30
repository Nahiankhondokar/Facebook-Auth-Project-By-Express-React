import React, { Component } from 'react';
import { CloseButton, Modal } from 'react-bootstrap';
import { FaImages } from "react-icons/fa";
import { BsTagsFill, BsEmojiSmile } from "react-icons/bs";
import { BsEmojiLaughing, BsFillFlagFill } from "react-icons/bs";
import { RiMoreFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import Image from './../../img/me.jpg';
import './PostModal.scss';

class PostModal extends Component {


  render() {

    // props
    const { postModalShow, handlePostModalHide } = this.props;

    return (
      <>
        {/* Create Account Modal */}
        <Modal show={ postModalShow } onHide={ handlePostModalHide } centered >
          <Modal.Header>
            <div className='post-modal-header'>
              <h5 className="post-modal-title">Create Post</h5> 
            </div>
            <CloseButton onClick={ handlePostModalHide }></CloseButton>
          </Modal.Header>
    
          <Modal.Body>
            <div className="post-body-area">

              <div className="post-creator-info">
                <img src={Image} alt="" className="user-photo" />
                <div className="post-security-title">
                  <a href='#' className="user-name"> Nahian Khondokar </a>
                  <div className="post-type">
                    <a href='#' className="post-type-name"><IoIosSettings /> Custom  <AiOutlineCaretDown /></a>
                  </div>
                </div>
              </div>
 
              <div className="post-form-area">
                <form action="" className='fb-post-form'>

                  <textarea name="" cols="5" rows="3" className="input-textarea" placeholder="What's on your mind, Nahian ?">
                  </textarea>

                  <div className="text-area-icons">
                    <a href=""><img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" /></a>
                    <div className="icon">
                      <BsEmojiSmile />
                    </div>
                  </div>

                  <div className="post-features">
                    <div className="post-feature-title">Add to your post</div>
                    <div className="post-features-icons">
                      <a href="#" className="icon-one"><FaImages /></a>
                      <a href="#" className="icon-two"><BsTagsFill /></a>
                      <a href="#" className="icon-three"><BsEmojiLaughing /></a>
                      <a href="#" className="icon-four"><MdLocationOn /></a>
                      <a href="#" className="icon-five"><BsFillFlagFill /></a>
                      <a href="#" className="icon-six"><RiMoreFill /></a>
                    </div>
                  </div>


                  <div className="fb-post-form-sbmt-btn">
                    <input type="submit" className='post-sbmt-btn' value="Post" />
                  </div>
                </form>
              </div>
            </div>
            
          </Modal.Body>
        </Modal>
      </>
    )
  }
}


export default PostModal;