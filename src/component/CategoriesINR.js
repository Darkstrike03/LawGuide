import React from 'react';

class CategoriesINR extends React.Component {
    render() {
        return (
            <>
                <nav style={{ '--bs-breadcrumb-divider': '">"' }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
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
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>

                        {/* Fourth Card */}
                        <div className="col-md-4 mb-4">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
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
