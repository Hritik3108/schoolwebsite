import './index.scss'
import { useRef,useState,useEffect } from 'react';
import axios from 'axios';

const AddStudent = () => {

    const refForm=useRef()
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
                    <div className='col'>{student.name}</div><div><button className='btn btn-danger'>Delete</button></div>
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

    return(
        <div className='container addStudent'>
            <div className="row outer-row">

            <div className='col outer-col'>
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
                                <div className="row form-inner-row d-flex flex-column justify-content-md-center align-items-center">
                                    <div className="row input-row">
                                        <input type="text" name='name' id="name" className="form-control" placeholder="Name" value={saveStudent.name} onChange={handleChange} required/>
                                    </div>
                                    <div className="row input-row">
                                        <input type="email" name='email' id="e-mail" className="form-control" placeholder="E-mail" value={saveStudent.email} onChange={handleChange} required/>
                                    </div>
                                    <div className="row input-row">
                                        <input type="number" name='rollno' id="rollno" className="form-control" placeholder="Roll No" value={saveStudent.rollno} onChange={handleChange} required/>
                                    </div>

                                    <div className="row input-row">
                                        <input type="text" name='address' id="address" className="form-control" placeholder="Address" value={saveStudent.address} onChange={handleChange} required/>
                                    </div>
                                    <div className="row input-row">
                                        <input type="text" name='std' id="std" className="form-control" placeholder="std" value={saveStudent.std} onChange={handleChange} required/>
                                    </div>
                                    <div className="row input-row">
                                        <input type="text" name='mobno' id="mobno" className="form-control" placeholder="Mobile No." value={saveStudent.mobno} onChange={handleChange} required/>
                                    </div>
                                    <div className="row sub-row d-grid gap-2 sub-btn">
                                        <button type="submit" className="btn custom-btn btn-block">Add Student</button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AddStudent;