import React from 'react';
import { Link } from 'react-router-dom';

class Claws extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    {/* First Card - Indian Constitution */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg" style={{ width: '22rem' }}>
                            <img src="https://via.placeholder.com/200" className="card-img-top" alt="Indian Constitution" />
                            <div className="card-body">
                                <h5 className="card-title">Indian Constitution</h5>
                                <p className="card-text">
                                    The supreme law of India, defining fundamental rights, duties, and governance structure.
                                </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Written In:</strong> 1949</li>
                                    <li className="list-group-item"><strong>Enforced On:</strong> 26th Jan 1950</li>
                                    <li className="list-group-item"><strong>Articles:</strong> 448</li>
                                    <li className="list-group-item"><strong>Amendments:</strong> 105 (as of 2023)</li>
                                </ul>
                                <Link to="/CategoriesINR" className="btn btn-primary mt-2">Explore</Link>
                                <Link to="/constitution-details" className="btn btn-secondary mt-2 ms-2">More Info</Link>
                            </div>
                        </div>
                    </div>

                    {/* Second Card - Criminal Law */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg" style={{ width: '22rem' }}>
                            <img src="https://via.placeholder.com/200" className="card-img-top" alt="Criminal Law" />
                            <div className="card-body">
                                <h5 className="card-title">Criminal Law</h5>
                                <p className="card-text">
                                    Laws concerning crimes, punishments, and the justice system.
                                </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Key Acts:</strong> IPC, CrPC, Indian Evidence Act</li>
                                    <li className="list-group-item"><strong>Major Crimes:</strong> Theft, Assault, Homicide, Cybercrime</li>
                                    <li className="list-group-item"><strong>Legal Punishments:</strong> Fines, Imprisonment, Death Penalty</li>
                                </ul>
                                <Link to="/CategoriesCriminal" className="btn btn-primary mt-2">Explore</Link>
                                <Link to="/criminal-law-info" className="btn btn-secondary mt-2 ms-2">More Info</Link>
                            </div>
                        </div>
                    </div>

                    {/* Third Card - Civil Law */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-lg" style={{ width: '22rem' }}>
                            <img src="https://via.placeholder.com/200" className="card-img-top" alt="Civil Law" />
                            <div className="card-body">
                                <h5 className="card-title">Civil Law</h5>
                                <p className="card-text">
                                    Laws that govern non-criminal disputes, including property, family, and contract law.
                                </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Key Areas:</strong> Property Law, Contract Law, Family Law</li>
                                    <li className="list-group-item"><strong>Common Cases:</strong> Divorce, Inheritance, Consumer Rights</li>
                                    <li className="list-group-item"><strong>Legal Remedies:</strong> Compensation, Injunctions, Settlements</li>
                                </ul>
                                <Link to="/CategoriesCivil" className="btn btn-primary mt-2">Explore</Link>
                                <Link to="/civil-law-info" className="btn btn-secondary mt-2 ms-2">More Info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Claws;
