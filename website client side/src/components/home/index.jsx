import React, { useState} from 'react';
import './index.scss';
// import NavBar from '../sidebar';
// import UserData from '../userData';
import Student from '../student';
import Staff from '../staff';
import Parent from '../parent';
import Admin from '../admin';

const Home = () => {
  const [activeTab, setActiveTab] = useState('tab4');
  const [institution, setInstitution] =useState({category:""});
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  function handleChange(event){
    const {name,value} = event.target
    setInstitution(prev => ({
        ...prev,
        [name]:value
    }))
}



  return (
    <div className="tabs-container">
      {/* <NavBar /> */}
      {/* <center><h2>Welcome to homepage</h2></center> */}
      <div className="tab-buttons">
        <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Admin</button>
        <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Staff</button>
        <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Parents</button>
        <button className={activeTab === 'tab4' ? 'active' : ''} onClick={() => handleTabClick('tab4')}>Student</button>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && 
          <div className='tab-1-div'>
            <Admin />
          </div>}
        {activeTab === 'tab2' && 
          <div className='tab-2-div'>
            {/* <UserData /> */}
            <Staff />
          </div>}
        {activeTab === 'tab3' && 
        <div className='tab-3-div'>
          <Parent />
        </div>}
        {activeTab === 'tab4' && 
        <div className='tab-4-div'>
          <Student />
        </div>}
      </div>
    </div>
  );
};

export default Home;