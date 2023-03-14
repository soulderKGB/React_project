import './SignUp.css';
import './SignUp.js';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";

function SignUp(props){
    return(
      <>
      <Header/>
        <div class="container">
        <div class="title">Registration</div>
        <div class="content">
          <form action="#" name="SignupForm">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input type="text" id="fname" name="fname" minlength="2" placeholder="Enter your name" required/>
              </div>
              <div class="input-box">
                <span class="details">Username</span>
                <input id="username"  type="text" minlength="8" maxlength="20"  placeholder="Enter your username" required/>
              </div>
              <div class="input-box">
                <span class="details">Email</span>
                <input type="email" id="email" name="email" placeholder="Enter your email" required/>
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input type="tel" id="phonenum" name="phonenum" pattern="[0-9]{3}-[0-9]{2}-[0-9]{7}" minlength="14" maxlength="14" placeholder="Enter phone number (971-xx-xxxxxxx)" required/>
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="password" id="psw" name="user_password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                placeholder="Enter your password" required/>
              </div>
              <div class="input-box">
                <span class="details">Confirm Password</span>
                <input type="password" name="confirm_password" id="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                placeholder="Confirm your password" required  onkeyup="confirmPassword()"/>
                <p id="ConfirmPasswordErr"></p>
    
              </div>
            </div>
            <div class="gender-details">
              <input type="radio" name="gender" id="dot-1" checked/>
              <input type="radio" name="gender" id="dot-2"/>
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              </div>
            </div>
    
            <div class="policy">
                <input type="checkbox" required/>
                <p>I accept all terms & condition</p>
              </div>
    
            <div class="button">
              <input type="submit" value="Register"/>
            </div>
    
            <div class="text">
                <h3>Already have an account? <Link to ='/'>Login now</Link></h3>
              </div>
              
          </form>
        </div>
      </div>
      <Footer/>
     </>
    );
        
}

export default SignUp;