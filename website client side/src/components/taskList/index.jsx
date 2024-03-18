import './index.scss'

const TaskList =()=>{
    return(
        <div className='tasklist-container'>
            <ul>
            <h4 className='tasklist-heading'>Tasks</h4>
                <li>English Assignment <button className='btn-pending'>Pending</button></li>
                <li>Maths Assignment <button className='btn-complete'>Complete</button></li>
                <li>Hindi Assignment <button className='btn-pending'>Pending</button></li>
            </ul>
        </div>
    )
}
export default TaskList;