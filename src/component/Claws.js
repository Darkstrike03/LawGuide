import React from 'react';
import { Link } from 'react-router-dom';

class Claws extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    {/* First Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Indian Constituion</h5>
                                <p className="card-text">This contains Indian laws.</p>
                                <Link to="/CategoriesINR" className="card-link">Come..</Link>
                            </div>
                        </div>
                    </div>

                    {/* Second Card 
                    <div className="col-md-4 mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>*/}

                    {/* Third Card 
                    <div className="col-md-4 mb-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
        );
    }
}

export default Claws;
