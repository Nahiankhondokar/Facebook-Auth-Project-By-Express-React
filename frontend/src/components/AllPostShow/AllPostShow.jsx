import React, { Component } from 'react';
import { GiWorld } from "react-icons/gi";
import { RiMoreFill, RiShareForwardLine } from "react-icons/ri";
import { AiFillLike, AiOutlineGif } from "react-icons/ai";
import { BiLike, BiJoystick } from "react-icons/bi";
import { VscComment } from "react-icons/vsc";
import { BsEmojiAngryFill, BsEmojiHeartEyes, BsEmojiSmile, BsCamera } from "react-icons/bs";
import Image from './../../img/me.jpg';
import './AllPostShow.scss';

class AllPostShow extends Component {
  render() {
    return (
     
    <div className="fb-create-news-area">

        <div className='fb-all-post-area'>
            <div className="post-top-part">
            <div className="post-img-title">
                    <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/283175052_10222301451664954_7874233041930696211_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE2RT0t2HP8L4hKGobzznK7yLvleOrjCObIu-V46uMI5u3wH-SGNaGS_GhmKVHqsiVd1ep7WS9fbLyzVVtawfOk&_nc_ohc=ICOcMep0s6kAX_fhs5b&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8mgP5gy7HwSp92F2xpVyJfQ7V69X56VBMiB4ZtbJidTg&oe=6308C9B3" alt="" />
                    <div className="post-title">
                        <a href="#" className="user-name">Ashraful Haque</a>
                        <div className="time-icon">
                            <div className="post-time">6d</div>
                            <div className="post-type-icon" title='Public'><GiWorld /></div>
                        </div>
                    </div>
            </div>
                <a href='#' className="post-more-option-btn" >
                    <RiMoreFill />
                </a>
            </div>
            <div className="post-caption">Your Assignments are here...</div>
            
            <div className="fb-post-feature-img-area">
                <img src="http://www.ealingu3a.org.uk/wp-content/uploads/2014/03/Assignment-Help.png" alt="" />
            </div>

            <div className="fb-post-like-comment-area">
                <div className="like-comment-count">
                    <div className="left-side">
                        <div className="emoji">
                            <div className="emoji-one">
                                <BsEmojiAngryFill />
                            </div>
                            <div className="emoji-two">
                                <AiFillLike />
                            </div>
                            <div className="emoji-three">
                                <BsEmojiHeartEyes />
                            </div>
                        </div>
                        <div className="like-people">269k likes</div>
                    </div>
                    <div className="right-side">
                        <a href="#">9.1k Comments &nbsp;<span>3.1k Shares</span></a>
                    </div>
                    
                </div>
                <hr />
            </div>

            <div className="fb-post-like-comment-btn">
                <div className="like-btn">
                    <div className="icon">
                        <BiLike />
                    </div>
                    <p>Like</p>
                </div>
                <div className="comment-btn">
                    <div className="icon">
                        <VscComment />
                    </div>
                    <p>Comment</p>
                </div>
                <div className="share-btn">
                    <div className="icon">
                        <RiShareForwardLine />
                    </div>
                    <p>Share</p>
                </div>
                
            </div>
            <hr />
            <div className="fb-post-comment-section">
                <div className="comment-user-show">
                    <img className='user-profile' src={Image} alt="" />
                    <div className="user-active-status"></div>
                </div>
                <form action="" className="comment-form">
                    <input type="text" className="comment-input" placeholder='Write a comment'/>

                    <div className="comment-feature-area">
                        <BsEmojiSmile />
                        <BsCamera />
                        <AiOutlineGif />
                        <BiJoystick />
                    </div>
                    
                </form>
            </div>
        </div> 

        <div className='fb-all-post-area'>
            <div className="post-top-part">
            <div className="post-img-title">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />
                    <div className="post-title">
                        <a href="#" className="user-name">Emon Musk</a>
                        <div className="time-icon">
                            <div className="post-time">6d</div>
                            <div className="post-type-icon" title='Public'><GiWorld /></div>
                        </div>
                    </div>
            </div>
                <a href='#' className="post-more-option-btn" >
                    <RiMoreFill />
                </a>
            </div>
            <div className="post-caption">Tesla is the beggest brand in the world</div>
            <br />
            <div className="fb-post-feature-img-area">
                <img src="https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Logo-Hero.jpg?quality=82&strip=all&w=1600" alt="" />
            </div>

            <div className="fb-post-like-comment-area">
                <div className="like-comment-count">
                    <div className="left-side">
                        <div className="emoji">
                            <div className="emoji-one">
                                <BsEmojiAngryFill />
                            </div>
                            <div className="emoji-two">
                                <AiFillLike />
                            </div>
                            <div className="emoji-three">
                                <BsEmojiHeartEyes />
                            </div>
                        </div>
                        <div className="like-people">269k likes</div>
                    </div>
                    <div className="right-side">
                        <a href="#">9.1k Comments &nbsp;<span>3.1k Shares</span></a>
                    </div>
                    
                </div>
                <hr />
            </div>

            <div className="fb-post-like-comment-btn">
                <div className="like-btn">
                    <div className="icon">
                        <BiLike />
                    </div>
                    <p>Like</p>
                </div>
                <div className="comment-btn">
                    <div className="icon">
                        <VscComment />
                    </div>
                    <p>Comment</p>
                </div>
                <div className="share-btn">
                    <div className="icon">
                        <RiShareForwardLine />
                    </div>
                    <p>Share</p>
                </div>
                
            </div>
            <hr />
            <div className="fb-post-comment-section">
                <div className="comment-user-show">
                    <img className='user-profile' src={Image} alt="" />
                    <div className="user-active-status"></div>
                </div>
                <form action="" className="comment-form">
                    <input type="text" className="comment-input" placeholder='Write a comment'/>

                    <div className="comment-feature-area">
                        <BsEmojiSmile />
                        <BsCamera />
                        <AiOutlineGif />
                        <BiJoystick />
                    </div>
                    
                </form>
            </div>
        </div>

        <div className='fb-all-post-area'>
            <div className="post-top-part">
            <div className="post-img-title">
                    <img src="https://www.melamorsicata.it/wp-content/uploads/2017/05/Young-Steve-Jobs.jpg" alt="" />
                    <div className="post-title">
                        <a href="#" className="user-name">Steve Jobs</a>
                        <div className="time-icon">
                            <div className="post-time">6d</div>
                            <div className="post-type-icon" title='Public'><GiWorld /></div>
                        </div>
                    </div>
            </div>
                <a href='#' className="post-more-option-btn" >
                    <RiMoreFill />
                </a>
            </div>
            <div className="post-caption">Create your imagination...</div>
            <br />
            <div className="fb-post-feature-img-area">
                <img src="https://1734811051.rsc.cdn77.org/data/images/full/376289/steve-jobs-delivers-keynote-speech-at-macworld-conference-expo.jpg" alt="" />
            </div>

            <div className="fb-post-like-comment-area">
                <div className="like-comment-count">
                    <div className="left-side">
                        <div className="emoji">
                            <div className="emoji-one">
                                <BsEmojiAngryFill />
                            </div>
                            <div className="emoji-two">
                                <AiFillLike />
                            </div>
                            <div className="emoji-three">
                                <BsEmojiHeartEyes />
                            </div>
                        </div>
                        <div className="like-people">269k likes</div>
                    </div>
                    <div className="right-side">
                        <a href="#">9.1k Comments &nbsp;<span>3.1k Shares</span></a>
                    </div>
                    
                </div>
                <hr />
            </div>

            <div className="fb-post-like-comment-btn">
                <div className="like-btn">
                    <div className="icon">
                        <BiLike />
                    </div>
                    <p>Like</p>
                </div>
                <div className="comment-btn">
                    <div className="icon">
                        <VscComment />
                    </div>
                    <p>Comment</p>
                </div>
                <div className="share-btn">
                    <div className="icon">
                        <RiShareForwardLine />
                    </div>
                    <p>Share</p>
                </div>
                
            </div>
            <hr />
            <div className="fb-post-comment-section">
                <div className="comment-user-show">
                    <img className='user-profile' src={Image} alt="" />
                    <div className="user-active-status"></div>
                </div>
                <form action="" className="comment-form">
                    <input type="text" className="comment-input" placeholder='Write a comment'/>

                    <div className="comment-feature-area">
                        <BsEmojiSmile />
                        <BsCamera />
                        <AiOutlineGif />
                        <BiJoystick />
                    </div>
                    
                </form>
            </div>
        </div> 
    </div>
      
    )
  }
}

export default AllPostShow;