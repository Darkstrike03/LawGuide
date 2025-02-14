import React from 'react';
import './Card1.css';

class Container2 extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center my-4">
            <div className="container mt-4">
                <h2>Are you concerned about your privacy ?</h2>
                <p>Then dont fret because we have'nt even introduced our login feature.</p>
                <p>This website works on some specfic algorithm so don't be afraid.</p>
                <div className="d-flex justify-content-center my-4">
                <a href="#" className="btn btn-primary custom-btn">
                            Go somewhere
                            <svg fill="#ffffff" height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 4v1.79c-3.39.49-6 3.39-6 6.91s2.61 6.42 6 6.91V20c-4.42-.5-8-4.25-8-8.5S7.58 4.5 12 4zm0 2.5c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5 5.5-2.46 5.5-5.5S15.04 6.5 12 6.5zm1 5.5h-2v2h2v-2zm0-4h-2v2h2V8z"/>
                            </svg>
                        </a></div>
            </div>
            </div>
        );
    }
}

export default Container2;