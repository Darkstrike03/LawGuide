import React from 'react';

class CategoriesINR extends React.Component {
    render() {
        const categories = [
            { title: "Fundamental Rights", text: "Explore the core rights granted to citizens under the Indian Constitution.", image: "https://via.placeholder.com/150", link: "#" },
            { title: "Directive Principles", text: "Learn about the guiding principles for the state to establish social and economic democracy.", image: "https://via.placeholder.com/150", link: "#" },
            { title: "Judiciary System", text: "Understand the structure and role of the Indian Judiciary in upholding laws.", image: "https://via.placeholder.com/150", link: "#" },
            { title: "Parliamentary System", text: "Get insights into how India's bicameral legislature functions.", image: "https://via.placeholder.com/150", link: "#" }
        ];

        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Indian Constitution</li>
                    </ol>
                </nav>
                <div className="container mt-4">
                    <h2>Categories</h2>
                    <p>Search among some of the popular laws sorted by our algorithm.</p>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        {categories.map((category, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={category.image} className="card-img-top" alt={category.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{category.title}</h5>
                                        <p className="card-text">{category.text}</p>
                                        <a href={category.link} className="card-link">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default CategoriesINR;
