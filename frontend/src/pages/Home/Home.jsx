import React, { Component, useContext } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import { BiChevronDown } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { RiVideoAddFill, RiMoreFill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Image from './../../../../frontend/src/img/me.jpg';
import cookie from 'js-cookie';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

class Home extends Component {



  render() {

    // logout
    const handleLogout = (e) => {
      e.preventDefault();

      cookie.remove('token');
      this.props.dispatch({ type : 'USER_LOGOUT'});
      this.props.navigate('/login');
    }

    return (
    <>
    <TopBar />
      <div className="fb-home-container">
        <div className="fb-home-wrapper">
          <div className="fb-home-left">
            <div className='fb-account'>
              <img className='fb-acc-img' src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/274738893_3461289187430961_7168829541213425647_n.jpg?stp=c0.5.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEztD_GheiTODg75pIq0cNlY3neVO8R6i9jed5U7xHqL9tOOL6zdG7EHczE5MyOPETNcrKB8aLHYUl6J4xxke-g&_nc_ohc=9VxKoKdYWKQAX8fCAlx&tn=uwcbJkrwGo2JzeDW&_nc_ht=scontent.fdac138-1.fna&oh=00_AT81pf9cAJOU_D1sKBm2wWD1igWWZ4WftPsMJbiZ397aJw&oe=630950A0" alt="" /> 
              <span className='fb-acc-user-name'>Nahian&nbsp;Khondokar</span>
            </div>

            <div className="fb-left-side-icons">
              <ul>
                <li>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeGjVnqxtdxlDGc8z1x-ZFGpqfpKmA4GtxSp-kqYDga3FO_3RF86S2EtSVV6Y1AzBqHS4TqZLV766W4iM7Fp6v7K" alt="" /> <a href='' className='fb-left-side-text'>Friends</a> 
                </li>
                <li>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeF4XwHvaL4P8uWOv2fU2ZXxZ3xAUM5_bWpnfEBQzn9tankRf-IaYV5RP3yjhmBt3iB9s1zI5Ls9mgW3mWAOMBfZ" alt="" /> <a href="">Groups</a>
                </li>
                <li>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeFU7z7cc-Lj9YqzLVKnErqh-vsl1K9A-9v6-yXUr0D72-v4_PXNFcGFhJQHLehe7rO3nwSX4NczRr-stpN7FMEA" alt="" /> <a href="">Marketplace</a>
                </li>
                <li>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeEyLr1q_xwd8z8C87mbLHzY2NRDTXGHJ53Y1ENNcYcnnV9Yvq9XL7hnXloruBVJ_CZEUUes8Q-G_eiYunWK4cfD" alt="" /> <a href="">Watch</a>
                </li>
                <li>
                  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeFFwD_2NYw-OXSwiczx56zUa4YXxTz5jX9rhhfFPPmNf93b4TGJa9dfbCaC1-L0mf3eKD4woht4XDdQ6U3VELjN" alt="" /> <a href=''>Memories</a>
                </li>
                <li>
                  <div className="logout-area">
                    <div className="icon">
                      <AiOutlineLogout />
                    </div> 
                    <a href='#' onClick={ handleLogout }>Log Out</a>
                  </div>
                </li>
                <li>
                  <div className="fb-left-drop-down">
                    <div className="down-icon">
                      <BiChevronDown /> 
                    </div>
                    <a href="">See more</a>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
          </div>

          <div className="fb-home-middle">
            <div className="fb-store-area">

              {/* user story area */}
              <div className="fb-store-items">
                <div className="store-image-area">
                  <img className='store-image' src={Image} alt="" />
                </div>
                <div className="user-name">
                  <div className="store-icon">
                    <BsFillPlusCircleFill />
                  </div>
                  <p>Create story</p>
                </div>
              </div>

                {/* friends story area */}
              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://i.pinimg.com/736x/c8/a1/e7/c8a1e746d61c77db8ce00152dbb18158.jpg" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://www.melamorsicata.it/wp-content/uploads/2017/05/Young-Steve-Jobs.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <p>Steve Jobs</p>
                </div>
              </div>

              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://yqmedia.mogiio.com/post/720/0/0/29/696/MpZY9029.webp" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3" alt="" />
                </div>
                <div className="friend-name">
                  <p>Jeff Bezos</p>
                </div>
              </div>


              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://www.askideas.com/wp-content/uploads/2020/05/the-more-the-plans-fail-the-more-the-planners-plan.-ronald-reagan.jpg" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bill_Gates_June_2015.jpg/800px-Bill_Gates_June_2015.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <p>Bill Gets</p>
                </div>
              </div>


              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://quotesbook.com/quotes/imagination-quotes/lailah-gifty-akita/use-your-imagination-to-create-your-beautiful-life-1440x2560-1127.jpg" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <p>Elon Musk</p>
                </div>
              </div>


            </div>

            <NewsFeed />
           
          </div>

          <div className="fb-home-right">
            <div className="right-side-one">
              <p className="title">Birthdays</p>
              <div className="user-birthday-info">
                <div className="icon">
                  <FaBirthdayCake />
                </div>
                <div className="user-name"><b>Nahian Khondokar</b> have birthdays today</div>
              </div>
              <hr />
            </div>

            <div className="right-side-active-users">
              <div className="title-or-icons">
                <p className="title">Contacts</p>
                <div className="icons">
                  <a href=""><RiVideoAddFill /></a>
                  <a href=""><HiOutlineSearch /></a>
                  <a href=""><RiMoreFill /></a>
                </div>
              </div>

              <div className="activer-user-show">
                <img className='user-profile' src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/283175052_10222301451664954_7874233041930696211_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE2RT0t2HP8L4hKGobzznK7yLvleOrjCObIu-V46uMI5u3wH-SGNaGS_GhmKVHqsiVd1ep7WS9fbLyzVVtawfOk&_nc_ohc=ICOcMep0s6kAX_fhs5b&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8mgP5gy7HwSp92F2xpVyJfQ7V69X56VBMiB4ZtbJidTg&oe=6308C9B3" alt="" />
                <div className="user-active-status"></div>
                <a href="#">Ashraful Haque</a>
              </div>
              <div className="activer-user-show">
                <img className='user-profile' src="https://www.melamorsicata.it/wp-content/uploads/2017/05/Young-Steve-Jobs.jpg" alt=''/>
                <div className="user-active-status"></div>
                <a href="#">Steve Jobs</a>
              </div>
              <div className="activer-user-show">
                <img className='user-profile' src="https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3" alt=''/>
                <div className="user-active-status"></div>
                <a href="#">Jeff Bezos</a>
              </div>
               <div className="activer-user-show">
                <img className='user-profile' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg/220px-%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg" alt="" />
                <div className="user-active-status"></div>
                <a href="#">Bill Gets</a>
              </div>

              <div className="activer-user-show">
                <img className='user-profile' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />
                <div className="user-active-status"></div>
                <a href="#">Elon Musk</a>
              </div>
              <div className="activer-user-show">
                <img className='user-profile' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg/220px-%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg" alt="" />
                <div className="user-active-status"></div>
                <a href="#">Teem Cock</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}

// navigation
export function HomeWithRouter(){

  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  return <Home navigate={navigate} dispatch={dispatch} />
}

export default Home;