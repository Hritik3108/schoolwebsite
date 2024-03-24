import './index.scss'
import { useRef,useState,useEffect } from 'react';
import axios from 'axios';

const Staff = () => {

    const baseURL='/api/api/v1/auth/school/Staff/'
    const [staffDataLive,setStaffDataLive]=useState(0);
    const refForm=useRef()
    const[staff,setStaff]=useState({
        staffId:"",
        name:"",
        email:"",
        empId:"",
        dept:"",
        mobile:""
    })


    async function staffDataLog(e){
        try {
            const response = await axios.get(`${baseURL}/${localStorage.getItem('username')}`, {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': "Bearer "+localStorage.getItem('token')
                },
                withCredentials: true
            });
    
            if(response.status === 200){
                setStaff({
                    ...staff,
                    name: response.data.name,
                    email: response.data.email,
                    staffId: response.data.staffId,
                    empId: response.data.empId,
                    mobile: response.data.mobile,
                    dept: response.data.dept
                });
                setStaffDataLive(1);
                // console.log("status1:" + response.status + " staffDataLive=" + staffDataLive);
            } else {
                setStaffDataLive(0);
                // console.log("status2:" + response.status + " staffDataLive=" + staffDataLive);
            }
        } catch(error) {
            setStaffDataLive(0);
            console.log(error);
        }
    }

    const addTest = async () => {
        try {
            const fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.click();
            fileInput.addEventListener('change', async () => {
                const file = fileInput.files[0];
                const formData = new FormData();
                formData.append('file', file);
                const response = await axios.post(
                    '/api/api/v1/auth/school/uploadTestSeries/db',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': "Bearer " + localStorage.getItem('token')
                        },
                        withCredentials: true
                    }
                );
                if (response.status === 200) {
                    // Handle successful response, maybe update UI or show a message
                    // console.log(response.data);
                } else {
                    // Handle unsuccessful response
                    console.log(error)
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const[tests,setTests]=useState([])
    const allTest = async () => {
        try {
            const response = await axios.get('/api/api/v1/auth/school/allTest',
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': "Bearer " + localStorage.getItem('token')
                        },
                        withCredentials: true
                    }
                );
                if (response.status === 200) {
                    // Handle successful response, maybe update UI or show a message
                    setTests([...response.data])
                    // console.log(response.data.length)
                    // console.log(tests.length)
                } else {
                    // Handle unsuccessful response
                    console.log(error)
                }
            }catch (error) {
            console.log(error);
        }
    };

    const[students,setStudents]=useState([])
    const getAllStudent = async() =>{
        try{
            const response = await axios.get('/api/api/v1/auth/school/getAllStudent',
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': "Bearer " + localStorage.getItem('token')
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                setStudents([...response.data])
            }else{
                console.log(error)
            }
        }catch (error) {
            console.log(error);
        }
    };


    function studentsList(){
        return students.map((student, index) => (
            <div key={index} className="row">     
                <li className='d-flex'>
                    <div>{student.name}</div>
                </li>
            </div>
        ));
    }

    function testList(){
        return tests.map((test, index) => (
            <div key={index} className="row tests">     
                <li className='d-flex'>
                    <div>{test.fileName}</div> <div><button className='btn btn-danger'>Download</button></div>
                </li>
            </div>
        ));
    }

    const [saveStudent,setSaveStudent] = useState({
        rollno:"",
        name:"",
        address:"",
        std:"",
        email:"",
        mobno:""
    })

    const saveStudentData = async(e) =>{
        e.preventDefault();
        try{
            const studentData = {
                rollno:saveStudent.rollno,
                name:saveStudent.name,
                address:saveStudent.address,
                std:saveStudent.std,
                email:saveStudent.email,
                mobno:saveStudent.mobno
            }
            // console.log(studentData);
            // const response = await axios.post('/api/api/v1/auth/school/saveStudent',studentData,
            //     {
            //         headers: {
            //             'Content-Type': 'multipart/form-data',
            //             'Authorization': "Bearer " + localStorage.getItem('token')
            //         },
            //         withCredentials: true
            //     }
            // );
            // if (response.status === 200) {
            //     console.log("Student added")
            // }else{
            //     console.log("error")
            // }

            await axios.post('/api/api/v1/auth/school/saveStudent',studentData,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                console.log("Student added");
            } 
        }).catch(function (error){
            console.log("Somethings Wrong!Please Try Again"); 
        })

        }catch (error) {
            console.log(error);
        }
    };

    function handleChange(event){
        const {name,value} = event.target
        setSaveStudent(prev => ({
            ...prev,
            [name]:value
        }))
    }

    useEffect(()=>{
        getAllStudent();
    },[students])

    useEffect(()=>{
        allTest();
    },[tests])
    
    useEffect(()=>{
        staffDataLog();
        console.log(localStorage.getItem('username'))
        console.log(staff)
    },[])

    return(
        <div className="staff-container">
        {staffDataLive===0?<div className='screen-title'>No Staff Data Available</div>:
        <div className="container-fluid staff-inner-container">
            <div className='row init-row'>
                <div className='col col-lg-8 init-col'>
                    <div className="row profile-card">
                    <div className="col img-container">
                            <img src='https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                            alt='profile-pic' className='profile-pic'/>
                        </div>
                        <div className='col col-8 staff-data-card'>
                            <h1>Staff Id {staff.staffId}</h1>
                            <p>
                                <span><strong>Name:</strong> </span><span>{staff.name}</span><br/>
                                <span><strong>Email:</strong> </span><span>{staff.email}</span><br/>
                                <span><strong>Department:</strong> </span><span>{staff.dept}</span><br/>
                                <span><strong>Contact:</strong> </span><span>{staff.mobile}</span><br/>
                                <span><strong>Employee ID:</strong> </span><span>{staff.empId}</span><br/>
                            </p>
                        </div>
                    </div>
                    <div className="row test-series-heading">
                        <h2>Test Series</h2>
                    </div>
                    <div className="row test-series">
                    <ul>
                    {/* {tests.map((test, index) => (
                        <div key={index} className="row tests">     
                            <li className='d-flex'>
                                <div>{test.fileName}</div> <div><button className='btn btn-danger'>Download</button></div>
                            </li>
                        </div>
                    ))} */}
                    {testList()}
                    </ul>
                    <button className='btn btn-success' onClick={addTest}>Add Test</button>
                    </div>
                </div>
                <div className='col'>
                    <div className="row student-list-heading">
                        <h2>Student List</h2>
                    </div>
                    <div className="row student-list">
                        <ul>
                            {studentsList()}
                        </ul>
                    </div>

                    <div className="row add-student">
                        <h2>Add Student</h2>
                        <div className="form-card">
                            <form ref={refForm} onSubmit={saveStudentData}>
                                <div className="row d-flex flex-column justify-content-md-center align-items-center">
                                    <div className="row ">
                                        <input type="text" name='name' id="name" className="form-control" placeholder="Name" value={saveStudent.name} onChange={handleChange} required/>
                                    </div>
                                    <div className="row ">
                                        <input type="email" name='email' id="e-mail" className="form-control" placeholder="E-mail" value={saveStudent.email} onChange={handleChange} required/>
                                    </div>
                                    <div className="row ">
                                        <input type="number" name='rollno' id="rollno" className="form-control" placeholder="Roll No" value={saveStudent.rollno} onChange={handleChange} required/>
                                    </div>

                                    <div className="row ">
                                        <input type="text" name='address' id="address" className="form-control" placeholder="Address" value={saveStudent.address} onChange={handleChange} required/>
                                    </div>
                                    <div className="row ">
                                        <input type="text" name='std' id="std" className="form-control" placeholder="std" value={saveStudent.std} onChange={handleChange} required/>
                                    </div>
                                    <div className="row ">
                                        <input type="text" name='mobno' id="mobno" className="form-control" placeholder="Mobile No." value={saveStudent.mobno} onChange={handleChange} required/>
                                    </div>
                                    <div className="row d-grid gap-2 sub-btn">
                                        <button type="submit" className="btn custom-btn btn-block">Add Student</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </div>
    )
}
export default Staff;