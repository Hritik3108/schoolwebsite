import './index.scss'

const WardList = () => {
    return (
        <div className="container wardList-Container">
            <div className="row heading-row">
                <h2>Your Ward Details</h2>
            </div>
            <ul>
                <li>
                <div className="row list-row">
                    <div className='col data-col d-flex flex-column'>
                        <span className="span-head">Name</span> 
                        <span className="span-head">Sandard</span> 
                        <span className="span-head">Academic Record</span>
                    </div>
                    <div className='col value-col d-flex flex-column'>
                        <span className="span-data">Abinash</span> 
                        <span className="span-data">XII</span> 
                        <span className="span-data"><button className='btn btn-success'>Click To View</button></span>
                    </div>
                </div>    
                </li>
            </ul>
            
        </div>
    )
}

export default WardList;