import { useState, useEffect, Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

const CategoryLaws = () => {
    const { category } = useParams(); // Get category from URL
    const [laws, setLaws] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLaws = async () => {
            try {
                const response = await fetch(`https://your-vercel-json-url/${category}.json`);
                const data = await response.json();
                setLaws(data.laws);
            } catch (error) {
                console.error("Error fetching laws:", error);
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
            ) : (
                <ul>
                    {laws.map((law) => (
                        <li key={law.id}>
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
