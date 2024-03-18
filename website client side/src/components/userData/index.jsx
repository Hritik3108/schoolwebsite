import './index.scss'

const UserData = (props) => {
    return (
        <>
        <div className='profile-container'>
       <div className='card-Container'>
        <div className='userData-Card'>
            <div className='userDetails-container'>
            <div className='profile-pic-container'>
            <img src={"https://wallpapers.com/images/featured/cool-profile-pictures-4co57dtwk64fb7lv.jpg"} alt='profile-pic' className='profile-img' />
            </div>
            {/* <table>
                <tr>
                    <td>Full Name</td>
                    <td>Abinash Patra</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>ab@gmail.com</td>
                </tr>
                <tr>
                    <td>
                        Employee Id
                    </td>
                    <td>
                        IND01                        
                    </td>
                </tr>
                <tr>
                    <td>
                        Contact
                    </td>
                    <td>
                        Odisha, 751024
                    </td>
                </tr>

            </table> */}
            </div>

            {/* <div className='attendence-container'>
                <h4>Attendence Record</h4>
                <table>
                    <tr>
                        
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                    <tr>
                        
                        <td>Present</td>
                        <td>Present</td>
                        <td>Present</td>
                        <td>Present</td>
                        <td>Present</td>
                        <td>Present</td>
                        <td>Holiday</td>
                    </tr>
                    
                </table>
            </div> */}


            <div className='test-series-container'>
                <h4>Test Series</h4>
                {/* <table>
                    <tr>
                        <th>Subject</th>
                        <th>Maths</th>
                        <th>English</th>
                        <th>Hindi</th>
                        <th>Science</th>
                        <th>Computer</th>
                    </tr>
                    <tr>
                        <td>
                            <td><strong>Links</strong></td>
                        </td>
                        <td>
                            <td><a href="#" className='upload-test-btn'>Upload</a></td>
                        </td>
                        <td>
                            <td><a href="#" className='upload-test-btn'>Upload</a></td>
                        </td>
                        <td>
                            <td><a href="#" className='upload-test-btn'>Upload</a></td>
                        </td>
                        <td>
                            <td><a href="#" className='upload-test-btn'>Upload</a></td>
                        </td>
                        <td>
                            <td><a href="#" className='upload-test-btn'>Upload</a></td>
                        </td>
                    </tr>
                </table> */}
            </div>

        </div>
       </div>
       </div>    
        </>
    )
}

export default UserData;