import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CategoryLaws.css';

const CategoryLaws = () => {
    const { category } = useParams();
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
                <ol className="breadcrumb container mt-4 mr-0">
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
                <div className="laws-container mt-4">
                    {laws.map((law, index) => (
                        <div key={index} className="law-card">
                            <h3>{law.title || law.law}</h3> {/* Handle different key names */}
                            
                            {law.article && <p><strong>Article:</strong> {law.article}</p>}
                            {law.articles && law.articles.map((art, i) => (
                                <div key={i}>
                                    <p><strong>Article {art.article}:</strong> {art.description}</p>
                                </div>
                            ))}
                            {law.act && <p><strong>Act:</strong> {law.act}</p>}
                            {law.part && <p><strong>Part:</strong> {law.part}</p>}
                            {law.section && <p><strong>Section:</strong> {law.section}</p>}
                            <p><strong>Summary:</strong> {law.description || law.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryLaws;
