import React, { useState } from "react";
import { supabase } from "../supabaseClient"; // Ensure this is the correct path to your Supabase client
import "./Search.css"; // Optional: Add styles for the search interface

const Search = ({ onClose }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Fetch results from the database based on the Keywords column
            const { data, error } = await supabase
                .from("database") // Replace "laws" with your actual table name
                .select("*")
                .ilike("Keywords", `%${query}%`); // Perform a case-insensitive search

            if (error) {
                throw new Error(error.message);
            }

            setResults(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <div className="search-header">
                <h1>Law Guide</h1>
                <button className="close-button" onClick={onClose}>
                    ✖
                </button>
            </div>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for laws, keywords..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <div className="search-results">
                {results.length > 0 ? (
                    results.map((law) => (
                        <div key={law.ID} className="law-card">
                            <h3>{law.Title}</h3>
                            {law.Category && <p><strong>Category:</strong> {law.Category}</p>}
                            {law.Article && <p><strong>Article:</strong> {law.Article}</p>}
                            {law.Section && <p><strong>Section:</strong> {law.Section}</p>}
                            {law.Part && <p><strong>Part:</strong> {law.Part}</p>}
                            {law["BNS Section"] && <p><strong>BNS Section:</strong> {law["BNS Section"]}</p>}
                            {law["Bailable/Non-bailable"] && (
                                <p><strong>Bailable/Non-bailable:</strong> {law["Bailable/Non-bailable"]}</p>
                            )}
                            {law["Expert Opinion"] && (
                                <p><strong>Expert Opinion:</strong> {law["Expert Opinion"]}</p>
                            )}
                        </div>
                    ))
                ) : (
                    !loading && <p>No results found.</p>
                )}
            </div>
            <button className="back-button" onClick={onClose}>
                Back to Home
            </button>
        </div>
    );
};

export default Search;