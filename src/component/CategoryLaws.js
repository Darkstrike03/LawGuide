import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
            <h2>{category} Laws</h2>
            {loading ? (
                <p>Loading laws...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {laws.map((law, index) => (
                        <li key={index}>
                            <h3>{law.law}</h3>
                            <p><strong>Act:</strong> {law.act}</p>
                            <p><strong>Section:</strong> {law.section}</p>
                            <p><strong>Summary:</strong> {law.summary}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryLaws;
