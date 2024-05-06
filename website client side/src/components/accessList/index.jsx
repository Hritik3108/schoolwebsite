import axios from 'axios';
import './index.scss'
import { useRef, useState,useEffect } from 'react';

const AccessList = (props) => {
    
    const[tasks,setTasks]=useState([])
    const allTasks = async () => {
        try {
            const response = await axios.get(`/api/api/v1/auth/school/${props.getUrl}`,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': "Bearer " + localStorage.getItem('token')
                        },
                        withCredentials: true
                    }
                );
                if (response.status === 200) {
                    setTasks([...response.data])
                } else {
                    console.log(error)
                }
            }catch (error) {
            console.log(error);
        }
    };

    function taskList(){
        return tasks.map((task, index) => (
            <div key={index} className="row tasks">     
                <li className='d-flex'>
                    <div>{task.text}</div> <div><button className='btn btn-danger'>Delete</button></div>
                </li>
            </div>
        ));
    }

    const[listData,setListData]=useState({
        data:""
    });
    const taskListForm = useRef()

    async function addToTaskList(event){
        const lsdata={
            data:listData.data
        }
        await axios.post(`/api/api/v1/auth/school/${props.postUrl}`,data,
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }).then((response) => {
            if(response.status===200){
                
            } 
        }).catch(function (error){
            console.log(error); 
        })
        console.log(listData.data);
    }

    function handleChange(event){
        const {name,value} = event.target
        setListData(prev => ({
            ...prev,
            [name]:value
        }))
    }

    useEffect(()=>{
        allTasks();
    },[tasks])
    
    return (
        <div className="container">
            <div className="row">

            <ul>
                {tasks.length!=0?taskList():
                <li className='d-flex'>
                <div className='col ls-col'>-----Empty-----</div> <div className='col'><button className='btn btn-danger'>Delete</button></div>
            </li>
                }                
            </ul>

            <form ref={taskListForm} onSubmit={addToTaskList}>
                <div className="row">
                    <input
                    className='form-control' 
                    type="text" 
                    value={listData.data} 
                    placeholder="Type to Add to List" 
                    name='data' 
                    onChange={handleChange} 
                    />
                <input 
                    className='submit-btn' 
                    type='submit' 
                    value='Add'
                    />
                </div>    
            </form>
            </div>
        </div>
    )
}

export default AccessList;
