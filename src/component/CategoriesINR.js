import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoriesINR.css';
import KnowYourRightsIcon from './assets/icons/justice.svg';

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
                        {/* First Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Constitutional Laws</h5>
                                    <p className="card-text">Fundamental rights of citizens of India</p>
                                    <Link to="/category/Constitutional Law" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={KnowYourRightsIcon} alt="Know Your Rights" className="card-icon" />
                                <div className="card-body">
                                    <h5 className="card-title">Criminal Laws</h5>
                                    <p className="card-text">The punishment and rights of a criminal.</p>
                                    <Link to="/category/criminal" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Family Laws</h5>
                                    <p className="card-text">Check out the family laws</p>
                                    <Link to="/category/Family Law" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Fourth Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Labour Laws</h5>
                                    <p className="card-text">Check out the Labour Laws protecting the rights of the</p>
                                    <Link to="/category/Labour Law" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Fifth Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={KnowYourRightsIcon} alt="Know Your Rights" className="card-icon" />
                                <div className="card-body">
                                    <h5 className="card-title">Environmental Laws</h5>
                                    <p className="card-text">Check out the laws protecting the Environment</p>
                                    <Link to="/category/Environmental Law" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Sixth Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Property Laws</h5>
                                    <p className="card-text">Check out the property laws in India</p>
                                    <Link to="/category/Property Law" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Seventh Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={KnowYourRightsIcon} alt="Know Your Rights" className="card-icon" />
                                <div className="card-body">
                                    <h5 className="card-title">Cyber Laws</h5>
                                    <p className="card-text">Check out the cyber laws</p>
                                    <Link to="/category/Cyber Law" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Eighth Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={KnowYourRightsIcon} alt="Know Your Rights" className="card-icon" />
                                <div className="card-body">
                                    <h5 className="card-title">Consumer Protection Laws</h5>
                                    <p className="card-text">Laws to protect the rights of a Consumer.</p>
                                    <Link to="/category/Consumer Protection" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Ninth Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={KnowYourRightsIcon} alt="Know Your Rights" className="card-icon" />
                                <div className="card-body">
                                    <h5 className="card-title">Intellectual Property Laws</h5>
                                    <p className="card-text">Check out the laws related to Intellectual Property such as Patents, Copyright etc.</p>
                                    <Link to="/category/Intellectual Property Law" className="card-link">Come..</Link>
                                </div>
                            </div>
                        </div>

                        {/* Tenth Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={KnowYourRightsIcon} alt="Know Your Rights" className="card-icon" />
                                <div className="card-body">
                                    <h5 className="card-title">Tax Laws</h5>
                                    <p className="card-text">Check out the Tax Laws.</p>
                                    <Link to="/category/Tax Law" className="card-link">Come..</Link>
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
