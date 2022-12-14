import React, { Component } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { BsQuestionCircleFill } from "react-icons/bs";
import { successToaster, errorToaster } from '../../utility/Toaster';
import swal from 'sweetalert';
import './Register.scss';

class Register extends Component {

  constructor(props){
    super(props)


    this.state = {
        input : {
          name  : '',
          surname : '', 
          celloremail :'',
          password : '',
          gender : '',
          birth_day : '',
          birth_month : '',
          birth_year : ''
        }
    }
  }

  render() {
    // modal steta
    const { regModal, handleRegModalHide } = this.props;

    // state data
    const { name, surname, celloremail, password, birth_day, birth_month, birth_year } = this.state.input;

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
    const handleRegSubmit = async (e) => {
      e.preventDefault();
      
      
     try {

      if(!name || !surname || !celloremail || !password || !birth_day || !birth_month || !birth_year ){
          errorToaster('All feilds are required');
      }else {
        await axios.post('http://localhost:5050/api/users/register', this.state.input)
        .then(res => {

          this.setState({
            input : {
              name  : '',
              surname : '', 
              celloremail :'',
              password : '',
              gender : '',
              birth_day : '',
              birth_month : '',
              birth_year : ''
            }
          });

          handleRegModalHide();
          successToaster('Registration Completed');
          swal( "Success" ,  "User has been successfully registered. Please login!" ,  "success");
        });
      }
      
     } catch (error) {
      console.log(error);
     }

    }



    return (
      <>
      {/* Create Account Modal */}
      <Modal show={ regModal } onHide={handleRegModalHide} centered >
        <Modal.Header closeButton>
          <div className='reg-modal-header'>
            <h2 className="reg-modal-title">Sign UP</h2>
            <p className="reg-modal-desc">It's quick and easy.</p>  
          </div>
        </Modal.Header>
  
        <Modal.Body>
          <form onSubmit={ handleRegSubmit } className='fb-reg-form' method="POST">
  
            <div className="reg-form-first-two-clm">
              <input type="text" className='fb-reg-form-input' placeholder='First name' value={ name } onChange={ handleInputUpdate } name='name'/>


              <input type="text" className='fb-reg-form-input' placeholder='Surname' name='surname' value={ surname } onChange={ handleInputUpdate } />
            </div>
  
            <div className="reg-form-middle-two-clm">
              <input type="text" className='fb-reg-form-input' placeholder='Mobile number or email address' name='celloremail' value={ celloremail } onChange={ handleInputUpdate }/>
              <input type="text" className='fb-reg-form-input' placeholder='New password' name='password' value={ password } onChange={ handleInputUpdate } />
            </div>
            
  
  
            <div className='birth-item-area'>
  
              <div className="birth-title">
                <p>Date of birth <BsQuestionCircleFill /></p>
              </div>
  
              <div className="birth-date-area">
              <select aria-label="Day" name="birth_day" id="day" title="Day" value={ birth_day } onChange={ handleInputUpdate } >
              <option value="">Day</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              </select>
  
              <select aria-label="Month" name="birth_month" id="month" title="Month" value={ birth_month } onChange={ handleInputUpdate } >
                <option value="">Month</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
  
              <select aria-label="Year" name="birth_year" id="year" title="Year" value={ birth_year } onChange={ handleInputUpdate } >
                <option value="">Year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
              </select>
              </div>
            </div>
            
  
            <div className='gender-area'>
              <div className="gender-title">
                <p>Gender <BsQuestionCircleFill /></p>
              </div>
  
              <div className="gender-items">
  
                <div className="gender-wrappe">
                  <label htmlFor="female"> FeMale</label>
                  <input type="radio" id='female' name='gender' value='female' onChange={ handleInputUpdate }/>
                </div>
                
                <div className="gender-wrappe">
                  <label htmlFor="male"> Male</label>
                  <input type="radio" id='male' name='gender' value='male' onChange={ handleInputUpdate }/>
                </div>
  
                <div className="gender-wrappe">
                  <label htmlFor="custom"> Custom</label>
                  <input type="radio" id='custom' name='gender' value='custom' onChange={ handleInputUpdate }/>
                </div>
                
  
              </div>
  
            </div>
  
  
  
            <div className="terms">
              <span className='terms-one'>
              People who use our service may have uploaded your contact information to Facebook. Learn more.
              </span>
              <span className='terms-two'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</span>
            </div>
    
            <div className="fb-reg-form-sbmt-btn">
              <input type="submit" className='sbmt-btn' value="Sign Up" />
            </div>
          </form>
        </Modal.Body>
      </Modal>
      </>
    )
  }
}


export default Register;