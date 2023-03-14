import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state={
            users:[],
            userName:"",
            userpassword:"",
            accountMessage:"",
            errorMessage:"User name is incorrect"
        }
    }

    validateUser = (e) => {
        this.setState({userName:e.target.value});
        if(e.target.value.length<10){
            this.setState({
                errorMessage:"At least 10 characters needed"
            });
        } else{
            this.setState({
                errorMessage:""
            });
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            res=>{
                let tempData = res.data;
                this.setState({ users:tempData });
            }    
        );
    }

    authenticateUser = (e)=>{
        e.preventDefault();
        let flag=0;
        this.state.users.forEach(user => {
            if(user.email==this.state.userName && user.address.suite==this.state.userpassword){
                flag=1;
            }
        });
        if(flag==1){
            this.setState({accountMessage:"Valid details"});
            window.location.href = '/dashboard';
            }
        else{
            this.setState({accountMessage:"Invalid details"});
            }   
    }


    render(){

        
        return(
            <section id="loginbox">
        <form method="get" class="form-example" onSubmit={this.authenticateUser}>
          <div class="form-example">
            <input id="username" type="text" pattern="^@[A-Za-z]{1,15}$"  placeholder="Username" required onChange={this.validateUser}/>
            <p>{this.state.errorMessage}</p>
          </div>

          <div class="form-example">
          
            <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            placeholder="Password" onChange={(e)=>{
              this.setState({userpassword:e.target.value})
          }} required />
          </div>
          
            <input type="submit" value="Login" id="LoginButton"/>
          
        </form><br/>
      
  
        <Link to ='/signup'><button id="SignUpButton">Create an Account</button></Link>
      </section>
        );
    }
}

export default LoginForm;