import './index.scss'
import {  useRef, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const ChangePassword = () => {
    const baseURL='api/api/v1/auth/school'

    const [user,setUser] = useState({
        email:"",
        oldPassword:"",
        newPassword:""
    })

    const[msg,setMsg]=useState(" ");

    const navigate = useNavigate();

    async function change(event){
        const data={
            email:user.email,
            oldPassword:user.oldPassword,
            newPassword:user.newPassword
        }
        
        await axios.post(`${baseURL}/forgottenPassword`,data,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                setMsg("Password Changed")
            } 
        }).catch(function (error){
            console.log(error);  
            setMsg("Something Went Wrong!!")
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        change()
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
            <h1>Change Password</h1>
            <div className="input-box">
                <center><input type="email" name="email" placeholder='Username' value={user.email} onChange={handleChange}  required/></center>
            
            </div>
            <div className="input-box">
            <center><input type="Password" placeholder='Old Password' name="oldPassword" value={user.oldPassword} onChange={handleChange} required/></center>
            </div>

            <div className="input-box">
            <center><input type="Password" placeholder='New Password' name="newPassword" value={user.newPassword} onChange={handleChange} required/></center>
            </div>

            <button type="submit">Change Password</button>
            <div className="register-link">
                <center><p>Don't have an account?<a href="/registration">Register</a></p></center>
            </div>
            <div>
                <center><p>{msg}</p></center>
            </div>
        </form>
        </div>
        </div>
    );
}

export default ChangePassword;