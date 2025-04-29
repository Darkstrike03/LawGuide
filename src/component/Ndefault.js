import React from 'react';
import Fo from './assets/oops.png';
import './Ndefault.css'; // Import the CSS file for additional styling

class Ndefault extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card text-center nd-card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
                    <div className="card-body">
                        <h1 className="card-title nd-card-title">No Notices Available</h1>
                        <img 
                            src={Fo}   
                            className="card-img-top" 
                            alt="Background" 
                            
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Ndefault;
