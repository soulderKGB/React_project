import React from 'react';
import { Link } from "react-router-dom";
function LoginSec(props){
    return(
        <section id="loginbox">
        <form action="" method="get" class="form-example">
          <div class="form-example">
            <input id="username" type="text" pattern="^@[A-Za-z]{1,15}$"  placeholder="Username" required/>
          </div>

          <div class="form-example">
          
            <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            placeholder="Password" onChange={(e)=>{
              this.setState({userpassword:e.target.value})
          }} required />
          </div>
          <div class="form-example">
            <input type="submit" value="Login" id="LoginButton"/>
          </div>
        </form><br/>
      
  
        <Link to ='/signup'><button id="SignUpButton">Create an Account</button></Link>
      </section>

    );
}

export default LoginSec;