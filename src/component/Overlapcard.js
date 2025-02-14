import React from 'react';
import './OverlapCard.css';

const OverlapCard = () => {
  return (
    <div className="position-relative overflow-hidden" style={{ height: '500px' }}>
      {/* Background Image Card */}
      <div className="card border-0 shadow-lg image-card">
        <img 
          src="https://via.placeholder.com/800x600" 
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
