import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Library = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const laws = [
        { id: 1, title: "Indian Penal Code (IPC)", description: "Defines crimes and punishments in India." },
        { id: 2, title: "Constitution of India", description: "The supreme law of India." },
        { id: 3, title: "Consumer Protection Act", description: "Protects consumer rights and interests." }
    ];

    const filteredLaws = laws.filter(law =>
        law.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1>Library</h1>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search laws..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="row">
                {filteredLaws.map(law => (
                    <div key={law.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{law.title}</h5>
                                <p className="card-text">{law.description}</p>
                                <Link to={`/law/${law.id}`} className="btn btn-primary">Read More</Link> {/* ✅ Link to Detail Page */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
