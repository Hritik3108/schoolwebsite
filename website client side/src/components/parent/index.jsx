import './index.scss'
import { useState } from 'react';
import HeadLine from '../headLines'
import WardList from '../wardList'
import AcademySearchBox from '../academySearchBox'
import ContactForm from '../contactForm'

const Parent = () => {
    const [parentdataLive,setParentDataLive]=useState(0);
    return (
        <div className='parent-container'>
            
            {
            parentdataLive===1?<div className='screen-title'>No Parent Data Available</div>:
            <div>
                <div className="container-fluid parent-inner-container">    
                    <div className="row parent-detail-row">
                        <div className="account-info col col-lg-7 d-flex flex-column">
                            <p><span className='span-data'>Name :</span><span className='span-value'>Vaishali</span></p>
                            <p><span className='span-data'>Contact :</span><span className='span-value'>123456</span></p>
                            <p><span className='span-data'>Address :</span><span className='span-value'>Pune</span></p>
                        </div>
                        <div className="headline col">
                            {/* headline component */}
                            <HeadLine />
                        </div>
                    </div>
                    <div className='row ward-detail-row'>
                        {/* ward component */}
                        <WardList />
                    </div>
                    <div className="row search-box-row">
                        {/* search box component */}
                        <AcademySearchBox />
                    </div>
                    <div className="contact-us-row">
                        {/* contact component */}
                        <ContactForm />
                    </div>
                </div>
            </div>    
            }
        </div>
    )
}

export default Parent;