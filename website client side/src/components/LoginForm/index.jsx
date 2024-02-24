import React from "react";
import './index.css';
import {  useRef, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const LoginForm=()=>{

    const baseURL='api/api/v1/auth/school'

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate();

    async function login(event){
        const data={
            email:user.email,
            password:user.password,
        }
        
        await axios.post(`${baseURL}/login`,data,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                localStorage.setItem('FRtoken',response.data.access_token)
                navigate('/home')
            } 
        }).catch(function (error){
            console.log(error);  
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        login()
        
    }

    function handleChange(event){
        const {name,value} = event.target
        setUser(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const refForm=useRef()

    return(
        <div className="wrapper-container">
        <div className='wrapper'>
        <form ref={refForm} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <center><input type="email" name="email" placeholder='Username' value={user.email} onChange={handleChange}  required/></center>
            
            </div>
            <div className="input-box">
            <center><input type="Password" placeholder='Password' name="password" value={user.password} onChange={handleChange} required/></center>
            
            </div>
            <div className="remember-forgot">
                <label><input type="CheckBox"/>Remeber me</label>
                <a href="/changePassword">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="/registration">Register</a></p>
            </div>
        </form>
        </div>
        </div>
    );
};

export default LoginForm;