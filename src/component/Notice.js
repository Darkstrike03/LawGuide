import React from 'react';
import './Card1.css';

class Notice extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center my-4">
            <div className="container mt-4">
                <h2>Don't miss any updates !</h2>
                <p>Notices will be given for any updates related to the website or Laws</p>
                <p>Stay tuned !</p>
            </div>
            </div>
        );
    }
}

export default Notice;