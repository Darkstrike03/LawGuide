import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CategoryLaws.css'; // Import the CSS file

const CategoryLaws = () => {
    const { category } = useParams(); // Get category from URL
    const [laws, setLaws] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLaws = async () => {
            try {
                const response = await fetch(`https://learn-sepia-chi.vercel.app/${category}.json`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (!data[category]) {
                    throw new Error(`Category ${category} not found in data`);
                }
                setLaws(data[category]);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };

        fetchLaws();
    }, [category]);

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb container mt-4">
                    <li className="breadcrumb-item"><a href="../Library">Library</a></li>
                    <li className="breadcrumb-item"><a href="../CategoriesINR">Indian Constitution</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{category}</li>
                </ol>
            </nav>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="laws-container mt-4"> {/* Add mt-4 class here */}
                    {laws.map((law, index) => (
                        <div key={index} className="law-card">
                            <h3>{law.law}</h3>
                            
                            <p><strong>Act:</strong> {law.act}</p>
                            {law.part && (
                                <p><strong>Part:</strong> {law.part}</p>
                            )}
                            <p><strong>Section:</strong> {law.section}</p>
                            <p><strong>Summary:</strong> {law.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryLaws;
