import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoriesINR.css';

class CategoriesINR extends React.Component {
    render() {
        return (
            <>
                <nav style={{ '--bs-breadcrumb-divider': '">"' }} aria-label="breadcrumb">
                    <ol className="breadcrumb container mt-4">
                        <li className="breadcrumb-item"><a href="./Library">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Indian Constituion</li>
                    </ol>
                </nav>
                <div className="container mt-4">
                    <h2>Categories</h2>
                    <p>Search among some of the popular laws related by our sorted algorithm</p>
                    
                </div>
                <div className="container mt-4">
                    <div className="row">


                        {/* Second Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Constituional Rights</h5>
                                    <p className="card-text">The rights that people of india have</p>
                                    <Link to="/category/domestic-rights" className="card-link">Come..</Link>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                                                {/* First Card */}
                                                <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">BASIC RIGHTS</h5>
                                    <p className="card-text">Click on it for knowing the basic rights.</p>
                                    <Link to="/category/basic-rights" className="card-link">Come..</Link>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Fundamental Rights</h5>
                                    <p className="card-text">check out the fundamental rights</p>
                                    <Link to="/category/fundamental_rights" className="card-link">Come..</Link>
                                    <Link to="/category/honorable_mentions" className="card-link">more..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Fourth Card */}
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
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CategoriesINR;
