import './index.scss'
import AcademyPopup from '../academyPopup';
import { useState } from 'react';

const AcademyCard = (props) => {
    const stars = () => {
        for(let i=0;i<props.rating;i++){
            
        }
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='academyCard-container'>
            <img src={props.pic} 
            alt="academy-img" className='academyCard-img'/>
            <h5>{props.name}</h5>
            <p>Location: {props.location}</p>
            <p>Rating:{props.rating} star</p>
           <button className='btn btn-warning' onClick={handleOpenPopup}>Details</button>    
            <AcademyPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </div>
    )
}

export default AcademyCard;