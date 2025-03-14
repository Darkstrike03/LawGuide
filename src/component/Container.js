import React from 'react';

class Container extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <h2 className="text-center">Welcome to LAW GUIDE</h2>
                <p className="text-center">This is a platform where you can find all the legal information you need.</p>
                <p className="text-center" style={{fontSize: '1rem'}}>Explore our community, library, and notice sections for more details.</p>
            </div>
        );
    }
}

export default Container;
