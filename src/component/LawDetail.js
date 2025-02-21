import React from 'react';
import { useParams, Link } from 'react-router-dom';

const lawDetails = {
    1: {
        title: "Indian Penal Code (IPC)",
        content: "The Indian Penal Code (IPC) is the primary criminal code of India. It covers crimes like theft, assault, murder, and fraud."
    },
    2: {
        title: "Constitution of India",
        content: "The Constitution of India lays down the framework for political principles, procedures, and powers of government institutions."
    },
    3: {
        title: "Consumer Protection Act",
        content: "The Consumer Protection Act ensures fair trade practices and provides dispute resolution for consumers."
    }
};

const LawDetail = () => {
    const { id } = useParams();
    const law = lawDetails[id];

    if (!law) {
        return <h2>Law not found</h2>;
    }

    return (
        <div className="container mt-4">
            <h1>{law.title}</h1>
            <p>{law.content}</p>
            <Link to="/library" className="btn btn-primary">Back to Library</Link>
        </div>
    );
};

export default LawDetail;
