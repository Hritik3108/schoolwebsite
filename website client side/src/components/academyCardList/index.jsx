import './index.scss'
import AcademyCard from '../academyCard';

const AcademyCardList = () => {
    return (
        <div className='container-fluid academy-cardList'>
            <div className='row list-row'>
                <div className="col d-flex academyCard-list text-center">
                    <AcademyCard pic='https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/A5J97G/ssk102638-architecture-the-bishops-school-building-kalyaninagar-poona-A5J97G.jpg'
                     name='Bishops School' rating='5' location='Ranchi' />
                    <AcademyCard pic='https://www.yayskool.com/images/school/616387oxford-public-school-ranchi.jpg'
                     name='Oxford School' rating='3' location='Pune' />
                    <AcademyCard pic='https://svdinm.com/wp-content/uploads/2021/03/780325404-scaled.jpg'
                     name='St. Arnaldo School' rating='5' location='Pune' />
                    <AcademyCard pic='https://www.educationworld.in/wp-content/uploads/2016/10/The-Kalyani-School-Pune.jpg'
                     name='Kalyani School' rating='4' location='Pune' />
                    <AcademyCard pic='https://th.bing.com/th/id/OIP._HgW6Bf7NtY5uSExl2VhaQHaDj?rs=1&pid=ImgDetMain' 
                    name='Pawar Public School' rating='5'location='Pune'  />

                    <AcademyCard pic='https://svdinm.com/wp-content/uploads/2021/03/780325404-scaled.jpg'
                     name='St. Arnaldo School' rating='5' location='Pune' />
                     <AcademyCard pic='https://www.yayskool.com/images/school/616387oxford-public-school-ranchi.jpg'
                     name='Oxford School' rating='3' location='Pune' />
                     <AcademyCard pic='https://th.bing.com/th/id/OIP._HgW6Bf7NtY5uSExl2VhaQHaDj?rs=1&pid=ImgDetMain' 
                    name='Pawar Public School' rating='5' location='Pune' />
                    <AcademyCard pic='https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/A5J97G/ssk102638-architecture-the-bishops-school-building-kalyaninagar-poona-A5J97G.jpg'
                     name='Bishops School' rating='5' location='Pune' />
                     <AcademyCard pic='https://th.bing.com/th/id/OIP._HgW6Bf7NtY5uSExl2VhaQHaDj?rs=1&pid=ImgDetMain' 
                    name='Pawar Public School' rating='5' location='Pune' />
                </div>
            </div>
        </div>
    )
}

export default AcademyCardList;