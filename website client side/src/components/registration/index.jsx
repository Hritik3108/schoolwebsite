import './index.scss'
import {  useRef, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Registraion = () => {

    const baseURL='/school/register'
    
    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        gender:"",
        city:"",
        pincode:""
    })
    
    const[err,setErr]=useState("");

    const navigate = useNavigate();

    async function register(event){
        const data={
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password,
            gender:user.gender,
            city:user.city,
            pincode:user.pincode,
            role:"USER"
        }
        
        await axios.post(baseURL,data,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                localStorage.setItem('FRtoken',response.data.access_token)
                setErr("")
                navigate('/login')
            } 
        }).catch(function (error){
            console.log(error); 
            setErr('Credentials Wrong!Please Try Again'); 
        })
    }

    function handleSubmit(e){
        if(user.password!==user.confirmPassword){
            e.preventDefault()
            setErr("passwords doesn't matches")
        }else{
            e.preventDefault()
            register()
        }
    }

    function handleChange(event){
        const {name,value} = event.target
        setUser(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const refForm=useRef()
    const navRef = useRef();

    return (
        <div className='registration'>
        <div className='form-container'>
            <form ref={refForm} onSubmit={handleSubmit}>
                <h2>Registration</h2>
                
                <ul className='form-ul'>
                    <li><input 
                    className='inputbox'
                    type='text' 
                    name='firstName' 
                    placeholder='First Name' 
                    value={user.firstName} 
                    onChange={handleChange} 
                    required
                    />
                    </li>
                {/* </ul>
                
                <ul className='form-ul'> */}
                    <li><input 
                    className='inputbox'
                    type='text' 
                    name='lastName' 
                    placeholder='Last Name' 
                    value={user.lastName} 
                    onChange={handleChange} 
                    required
                    /></li>
                </ul>
                
                <ul className='form-ul-one'>
                    <li><input
                    className='inputbox' 
                    type='text' 
                    name='email' 
                    placeholder='email' 
                    value={user.email} 
                    onChange={handleChange}
                    required 
                    /></li>
                </ul>

                <ul className='form-ul'>
                    <li><input 
                    className='inputbox'
                    type='password' 
                    name='password' 
                    placeholder='Password' 
                    value={user.password} 
                    onChange={handleChange} 
                    required
                    /></li>
                {/* </ul>
                
                <ul className='form-ul'> */}
                    <li><input 
                    className='inputbox'
                    type='password' 
                    name='confirmPassword' 
                    placeholder='Confirm Password' 
                    value={user.confirmPassword} 
                    onChange={handleChange}
                    required 
                    /></li>
                </ul>
                
                <ul className='form-ul'>
                    <li><select 
                        className='inputbox'
                        name='gender' 
                        value={user.gender} 
                        onChange={handleChange} 
                        required
                    >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select>
                    </li>
                {/* </ul>
                    <ul className='form-ul'> */}
                    <li>
                    <input 
                    className='inputbox-city'
                    type='text' 
                    name='city' 
                    placeholder='City' 
                    value={user.city} 
                    onChange={handleChange}
                    required 
                    /> 
                    </li>
                </ul>

                <ul className='form-ul-one'>
                    <li>
                    <input 
                    className='inputbox'
                    type='number' 
                    name='pincode' 
                    placeholder='Pin Code' 
                    value={user.pincode} 
                    onChange={handleChange}
                    required 
                    />
                    </li>
                </ul>

                <ul>
                    <input className='submit-btn' type='submit' value='SIGN UP'/>
                </ul>
                
                <div className="form-text">
                    <p>Already have a account? <a href='/login'>Login</a></p>
                </div>
                <div className="form-text">
                    <p>{err}</p>
                </div>
            </form>
         </div>
         </div>
    
    );
}

export default Registraion;