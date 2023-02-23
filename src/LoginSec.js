function LoginSec(props){
    return(
        <section id="loginbox">
        <form action="" method="get" class="form-example">
          <div class="form-example">
            <input id="username" type="text" pattern="^@[A-Za-z0-9_]{1,15}$"  placeholder="Username" required/>
          </div>

          <div class="form-example">
          
            <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            placeholder="Password" required/>
          </div>
          <div class="form-example">
            <input type="submit" value="Login"/>
          </div>
        </form>
      
        <a href="">Forgot ID/Password</a> <br/>
        <a href="">Security & Help</a> <br/>
        <a href="">Enroll</a> <br/>
        <a href="pages/signup.html">Open an Account</a>
      </section>

    );
}

export default LoginSec;