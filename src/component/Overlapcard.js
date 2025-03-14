import React from 'react';
import './OverlapCard.css';
import Ohero from './assets/Untitled.png';

const OverlapCard = () => {
  return (
    <div className="position-relative overflow-hidden box-size">
      {/* Background Image Card */}
      <div className="card border-0 shadow-lg image-card">
        <img 
          src={Ohero} 
          className="card-img-top" 
          alt="Background" 
        />
      </div>

      {/* Text Card */}
      <div className="card border-0 shadow-lg text-card mb-auto p-4" >
        <div className="card-body">
          <h5 className="card-title">Accessible legal information</h5>
          <p className="card-text">
            Our AI assistant is designed to be available when you need it, at no cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverlapCard;
