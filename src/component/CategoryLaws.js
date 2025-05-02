import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Ensure this is the correct path to your Supabase client
import './CategoryLaws.css';

const CategoryLaws = () => {
    const { category } = useParams();
    const [laws, setLaws] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLaws = async () => {
            setLoading(true);
            setError(null);

            try {
                const { data, error } = await supabase
                    .from("database") // Replace "database" with your actual table name
                    .select("*")
                    .ilike("Category", category);

                console.log("Fetched data:", data); // Log the fetched data

                if (error) {
                    throw new Error(error.message);
                }

                if (!data || data.length === 0) {
                    throw new Error(`No laws found for category: ${category}`);
                }

                setLaws(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
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
                    {laws.map((law) => {
                        // Collect all keys (column names) that are null
                        const nullKeys = Object.keys(law).filter((key) => !law[key]);

                        return (
                            <div key={law.ID} className="law-card">
                                <h3>{law.Title}</h3>
                                {law.Article && <p><strong>Article:</strong> {law.Article}</p>}
                                {law.Section && <p><strong>Section:</strong> {law.Section}</p>}
                                {law.Part && <p><strong>Part:</strong> {law.Part}</p>}
                                {law.Chapter && <p><strong>Chapter:</strong> {law.Chapter}</p>}
                                {law["Act Name"] && <p><strong>Act Name:</strong> {law["Act Name"]}</p>}
                                {law["IPC Text"] && <p><strong>IPC Text:</strong> {law["IPC Text"]}</p>}
                                {law["IPC Summary"] && <p><strong>Summary:</strong> {law["IPC Summary"]}</p>}
                                {law["BNS Section"] && <p><strong>BNS Section:</strong> {law["BNS Section"]}</p>}
                                {law["BNS Title"] && <p><strong>BNS Title:</strong> {law["BNS Title"]}</p>}
                                <p><strong>Bailable/Non-bailable:</strong> {law["Bailable/Non-bailable"] || "No data available"}</p>
                                {law["Real-life Example"] && (
                                    <p><strong>Real-life Example:</strong> {law["Real-life Example"]}</p>
                                )}
                                {law["Expert Opinion"] && (
                                    <p><strong>Expert Opinion:</strong> {law["Expert Opinion"]}</p>
                                )}

                                {/* Display null keys at the end */}
                                {nullKeys.length > 0 && (
                                    <div className="null-keys">
                                        <p style={{ fontSize: "0.8rem", color: "gray" }}>
                                            Missing Data: {nullKeys.join(", ")}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CategoryLaws;
