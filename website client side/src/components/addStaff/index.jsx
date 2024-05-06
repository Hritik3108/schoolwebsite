import './index.scss'
import { useRef,useState,useEffect } from 'react';
import axios from 'axios';

const AddStaff = () => {

    const refForm=useRef()
    const[staffs,setStaffs]=useState([])
    const getAllStaff = async() =>{
        try{
            const response = await axios.get('/api/api/v1/auth/school/getAllStaff',
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': "Bearer " + localStorage.getItem('token')
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                setStaffs([...response.data])
            }else{
                console.log(error)
            }
        }catch (error) {
            console.log(error);
        }
    };


    function staffsList(){
        return staffs.map((staff, index) => (
            <div key={index} className="row">     
                <li className='d-flex'>
                    <div className='col'>{staff.name}</div><div><button className='btn btn-danger'>Delete</button></div>
                </li>
            </div>
        ));
    }

    const [saveStaff,setSaveStaff] = useState({
        name:"",
        empId:"",
        dept:"",
        email:"",
        mobile:""
    })

    const saveStaffData = async(e) =>{
        e.preventDefault();
        try{
            const staffData = {
                name:saveStaff.name,
                empId:saveStaff.empId,
                dept:saveStaff.dept,
                email:saveStaff.email,
                mobile:saveStaff.mobile
            }
            await axios.post('/api/api/v1/auth/school/createStaff',staffData,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                console.log("Staff added");
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
        setSaveStaff(prev => ({
            ...prev,
            [name]:value
        }))
    }

    useEffect(()=>{
        getAllStaff();
    },[staffs])

    return(
        <div className='container addStudent'>
            <div className="row outer-row">

            <div className='col outer-col'>
                    <div className="row student-list-heading">
                        <h2>Staff List</h2>
                    </div>
                    <div className="row student-list">
                        <ul>
                            {staffsList()}
                        </ul>
                    </div>

                    <div className="row add-student">
                        <h2>Add Staff</h2>
                        <div className="form-card">
                            <form ref={refForm} onSubmit={saveStaffData}>
                                <div className="row form-inner-row d-flex flex-column justify-content-md-center align-items-center">
                                    <div className="row input-row">
                                        <input type="text" name='name' id="name" className="form-control" placeholder="Name" value={saveStaff.name} onChange={handleChange} required/>
                                    </div>
                                    <div className="row input-row">
                                        <input type="email" name='email' id="e-mail" className="form-control" placeholder="E-mail" value={saveStaff.email} onChange={handleChange} required/>
                                    </div>
                                    <div className="row input-row">
                                        <input type="number" name='empId' id="empId" className="form-control" placeholder="Employee Id " value={saveStaff.empId} onChange={handleChange} required/>
                                    </div>

                                    <div className="row input-row">
                                        <input type="text" name='dept' id="dept" className="form-control" placeholder="Department" value={saveStaff.dept} onChange={handleChange} required/>
                                    </div>
                                    <div className="row input-row">
                                        <input type="text" name='mobile' id="mobno" className="form-control" placeholder="Mobile No." value={saveStaff.mobile} onChange={handleChange} required/>
                                    </div>
                                    <div className="row sub-row d-grid gap-2 sub-btn">
                                        <button type="submit" className="btn custom-btn btn-block">Add Staff</button>
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

export default AddStaff;