// import { useRef, useState } from 'react';
import './index.scss'
import AccessList from '../accessList';
import AddStudent from '../addStudent';
import AddStaff from '../addStaff';

const Admin = () => {

    return (
        <div className='admin-page container'>
            <div className="row desciption-row">
                
            </div>
            
            <div className="row list-row">
                <div className="col todo-col">
                    <h4>Add/Remove Tasks to/from Task list</h4>
                    <AccessList />
                </div>

                <div className="col">
                    <h4>Add Notice to headline</h4>
                    <AccessList />
                </div>
            </div>
            
            <div className="row studentList-row">
                <div className="col">
                    {/* <h4>Add or remove student from list</h4> */}
                    <AddStudent />
                </div>
                <div className="col">
                    {/* <h4>Add or remove staff from list</h4> */}
                    <AddStaff />
                </div>
            </div>

            {/* <div className="row schoolList-row">
                <h4>Add/Remove school from school list</h4>
            </div> */}
        </div>
    )
}

export default Admin;