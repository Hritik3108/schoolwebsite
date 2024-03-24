import './index.scss'
import AssignmentList from '../assignmentList';
import TaskList from '../taskList';
import { useState,useEffect } from 'react';
import axios from 'axios';
import NoticeBoard from '../notice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

const Student = () => {

    const baseURL='/api/api/v1/auth/school/student'
    const [dataLive,setDataLive]=useState(0);
    const[user,setUser]=useState({
        address : "",
        email : "",
        mobno : "",
        name : "",
        rollno : "",
        std : ""
    })


    async function dataLog(e){
        try {
            const response = await axios.get(`${baseURL}/${localStorage.getItem('username')}`, {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': "Bearer "+localStorage.getItem('token')
                },
                withCredentials: true
            });
    
            if(response.status === 200){
                setUser({
                    ...user,
                    name: response.data.name,
                    email: response.data.email,
                    mobno: response.data.mobno,
                    address: response.data.address,
                    rollno: response.data.rollno,
                    std: response.data.std
                });
                setDataLive(1);
                console.log("status2:" + response.status + " datalive=" + dataLive);
            } else {
                setDataLive(0);
                console.log("status2:" + response.status + " datalive=" + dataLive);
            }
        } catch(error) {
            setDataLive(0);
            console.log(error);
        }
    }
    

    useEffect(()=>{
        dataLog();
        console.log(localStorage.getItem('username'))
        console.log(user)
    },[])

    const currentDate = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
      
      const monthIndex = currentDate.getMonth();
      const monthName = months[monthIndex];

    return (
        <div className='student-container'>
            
            {
            dataLive===0?<div className='screen-title'>No Student Data Available</div>:
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-lg-8'>
                            <div className='row'>
                                <div className='col-8 sub-heading-container'>
                                        <h3>Hello, {user.name}</h3>
                                        <p>Keep learning with us!!</p>
                                        <p><strong>Email:</strong>{user.email}<br/><strong>Contact:</strong>{user.mobno}<br/><strong>Standard :</strong> 
                                        {user.std} <strong>Roll No.</strong> {user.rollno}<br/><strong>Address:</strong> {user.address}</p>                                
                                </div>
                                <div className='col student-img-container'>    
                                    <img src='https://media.istockphoto.com/id/1411186840/photo/back-to-school-on-white-background-colorful-plastic-letters-for-kids-3d-illustration.jpg?s=2048x2048&w=is&k=20&c=y2HAXXw3An1EsecfMkA9_A1g-u2_yWpfp2fkDLwD74I=' 
                                    alt='logo-img' className='student-img'/>
                                </div>    
                            </div>
                            <div className='row'>
                                <div className='live-lecture-container'>
                                    <h4>Today ({currentDate.getDate()+" "+monthName+", "+currentDate.getFullYear()}) <span className='session-span'></span></h4>
                                    <FontAwesomeIcon icon={faBroadcastTower} className='session-icon'/>
                                    <p>No sessions scheduled for today yet</p>
                                </div>
                            </div>    
                            <div className='row'>
                                <h1>Assignments</h1>
                                <AssignmentList />
                            </div>    

                        </div>  
                        <div className='col col-lg-4'>
                            <TaskList />
                            <NoticeBoard />
                        </div>    
                    </div>
                </div>
            </div>
            }

        </div>
    )
}

export default Student;