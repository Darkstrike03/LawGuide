import React from 'react';
import './Card1.css';

class Card1 extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center my-4">
                <div className="card text-center shadow-lg border-0" style={{ width: '50rem' }}>
                    <div className="card-header bg-primary text-white fw-bold fs-5">
                        🌟 Featured Highlight
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fs-4 text-dark">Explore the Indian Legal System</h5>
                        <p className="card-text text-muted">
                            Gain insights into the Indian Constitution, criminal and civil laws, and understand your legal rights. 
                            Our platform simplifies complex legal information for everyone.
                        </p>
                        <div className="d-flex justify-content-center my-4">
                            <a href="#" className="btn btn-primary custom-btn d-flex align-items-center">
                                <span className="me-2">Learn More</span>
                                <svg fill="#ffffff" height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 4v1.79c-3.39.49-6 3.39-6 6.91s2.61 6.42 6 6.91V20c-4.42-.5-8-4.25-8-8.5S7.58 4.5 12 4zm0 2.5c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5 5.5-2.46 5.5-5.5S15.04 6.5 12 6.5zm1 5.5h-2v2h2v-2zm0-4h-2v2h2V8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card1;
