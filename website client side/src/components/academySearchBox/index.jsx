import './index.scss'
import AcademyCardList from '../academyCardList';

const AcademySearchBox = () => {
    return (
        <div className="container academySearchBox-Container">
            <div className="row heading-row">
                <h2>Search Academy</h2>
            </div>
            <div className="searchBox-container text-center">
                <input placeholder='Search Location' name='search' className='search-input form-control'/>
            </div>
            <div className="row cardList-container">
                <AcademyCardList />
            </div>
        </div>
    )
}

export default AcademySearchBox;