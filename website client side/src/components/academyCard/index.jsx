import './index.scss'

const AcademyCard = (props) => {
    return (
        <div className='academyCard-container'>
            <img src={props.pic} 
            alt="academy-img" className='academyCard-img'/>
            <h5>{props.name}</h5>
            <p>Location: {props.location}</p>
            <p>Rating:{props.rating} star</p>
           <button className='btn btn-warning'>Details</button>        
        </div>
    )
}

export default AcademyCard;