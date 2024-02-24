import React from "react";
import './index.css';


const LoginForm=()=>{
    return(
        <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <center><input type="text" placeholder='Username' required/></center>
            
            </div>
            <div className="input-box">
            <center><input type="Password" placeholder='Password' required/></center>
            
            </div>
            <div className="remember-forgot">
                <label><input type="CheckBox"/>Remeber me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="/registration">Register</a></p>
            </div>
        </form>
        </div>
    );
};

export default LoginForm;