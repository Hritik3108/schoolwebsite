import './index.scss'
import AssignmentCard from '../assigmentCard';

const Student = () => {
    return (
        <div className='student-container'>
            <div className='profile-info-container'>
                <div className='profile-info-innerContainer'>
                    <h2>User Name</h2>
                    <p><strong>Hi User,</strong> Keep Learning with us like this.</p>
                </div>
                <img src="https://media.istockphoto.com/id/1411186840/photo/back-to-school-on-white-background-colorful-plastic-letters-for-kids-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=5V0dD7LLc4jb-nWH2AoeS2NFZ0Q80nuHcC2mlmMSkso="
                 alt='profile-logo' className='student-info-img' />
            </div>

            <div className='assignment-container'>
                <h3>Assignments:</h3>
                <div className='assignment-cardList'>
                    <AssignmentCard subject={"English"} pic={"https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                    <AssignmentCard subject={"Maths"} pic={"https://media.istockphoto.com/id/1873574098/photo/wooden-cube-with-plus-and-minus-signs-on-its-sides-concept-of-choosing-the-right-solution.webp?b=1&s=170667a&w=0&k=20&c=DeGiA2velwhWyuz78T8U2fQlQxDjORXyLj8OOKReW9E="}/>
                    <AssignmentCard subject={"Science"} pic={"https://images.unsplash.com/photo-1535127022272-dbe7ee35cf33?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                    <AssignmentCard subject={"Hindi"} pic={"https://media.istockphoto.com/id/1044119946/photo/learn-hindi-education-and-business-background.webp?b=1&s=170667a&w=0&k=20&c=JQZqoTNjb27Z5M91RvD_EaK8qtz1Ie1IOG9QHVeWdaY="}/>
                </div>
            </div>

            <div className='test-series-container'>
                <h3>Test Series:</h3>
                

            </div>
        </div>
    )
}

export default Student;