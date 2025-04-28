import React from 'react';
import './Card1.css';
import { Link } from 'react-router-dom';

class Card1 extends React.Component {
    render() {
        return (
            <div className="card1-container">
                <div className="card1">
                    <div className="card1-header">
                        🌟 Featured Highlight
                    </div>
                    <div className="card1-body">
                        <h5 className="card1-title">Explore the Communtiy</h5>
                        <p className="card1-text">
                            Gain insights into the Constitutions, criminal and civil laws, and understand your legal rights by communicating with fellow members. 
                            Our platform connects all the enthusiasts of laws.
                        </p>
                        <div className="d-flex justify-content-center my-4">
                            <a href="#" className="card1-btn">
                                <span className="me-2"><Link to="/library">Learn More</Link></span>
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
