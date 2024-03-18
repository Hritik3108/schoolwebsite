import './index.scss'

import {useRef, useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    const [open,setOpen] = useState(false)
    const navRef = useRef();

    return (
        <>
        
        <div className='menu-container' >
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                    {/* <nav ref={navRef}> */}
                        {/* <NavLink exact="true" activeclassname="active" className='loggin-link'> */}
                            <FontAwesomeIcon icon={faBars} color='#fff' className='bars-icon'/>
                        {/* </NavLink> */}
                    {/* </nav> */}
                </div>
                <div className={`sidebar-menu ${open? 'active':'inactive'}`}>
                {/* <div className='sidebar-menu'> */}
                <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/registration">Register</a></li>
                <li className='home-li'><a href="/home">Home</a></li>
                <li>Students Record</li>
                <li>
                    Test Series
                </li>
                <li>Answer Sheet</li>
                <li>Query</li>
                <li>Reviews</li>
                <li>Attendance Sheet</li>
                <li>Salary Records</li>
                <li>Yearly Holiday</li>
                </ul>
            </div>
        </div>


        
        </>
    )
}

export default NavBar;