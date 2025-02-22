import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryLaws = () => {
    const { category } = useParams(); // Get category name from URL
    const [laws, setLaws] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLaws = async () => {
            try {
                // Fetch the full JSON file from Vercel
                const response = await fetch("https://learn-sepia-chi.vercel.app/"); 
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                // Check if category exists in the data
                if (data[category]) {
                    setLaws(data[category]); // Set laws for the selected category
                } else {
                    throw new Error("Category not found");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLaws();
    }, [category]);

    return (
        <div>
            <h2>{category.replace("-", " ")} Laws</h2>
            {loading ? (
                <p>Loading...</p>
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
