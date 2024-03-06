import './index.scss'

const AssignmentCard = (props) => {
    return (
        <div className='card-container'>
            <img src={props.pic} 
            alt="subject-img" className='card-img'/>
            <h3>{props.subject}</h3>
            <button>Download</button>
        </div>
    )
}

export default AssignmentCard;