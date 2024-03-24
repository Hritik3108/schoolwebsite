import React, { useState } from 'react';
import './index.scss';

const Attendence = () => {
    const [attendanceList, setAttendanceList] = useState([]);
    
    const markAttendance = () => {
        const today = new Date().toLocaleDateString();
        if (attendanceList.includes(today)) {
            alert("Attendance already marked");
        } else {
            setAttendanceList([...attendanceList, today]);
        }
    };

    return (
        <div className='attendence-container'>
            <div className="container-fluid">
                <div className='row text-center bg-primary'>
                    <div className='col col-10'><h1>Attendance</h1></div>
                    <div className="col attendence-btn">
                        <button className='btn btn-warning attend-btn' onClick={markAttendance}>Mark Attendance</button>
                    </div>
                </div>
                {attendanceList.map(date => (
                    <div key={date} className="row row-cols-2 row-cols-md-6 bg-secondary d-flex align-items-center justify-content-md-center">
                        <div className="col col-lg-8">{date}</div>
                        <div className="col">
                            <button className='btn btn-success'>Present</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attendence;
