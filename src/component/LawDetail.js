import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './LawDetail.css';

const lawDetails = {
    1: {
        title: "Indian Penal Code (IPC)",
        summary: "The Indian Penal Code (IPC) is the primary criminal code of India, covering a wide range of offenses.",
        content: `
            The IPC was enacted in 1860 and remains the foundation of criminal law in India. 
            It defines various crimes and their respective punishments.
        `,
        sections: [
            { title: "Section 302", text: "Punishment for murder - Life imprisonment or the death penalty." },
            { title: "Section 376", text: "Punishment for rape - Rigorous imprisonment up to life." },
            { title: "Section 420", text: "Cheating and fraud - Up to 7 years imprisonment with fine." }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/IPC_cover.jpg/250px-IPC_cover.jpg",
        caseStudy: "K.M. Nanavati v. State of Maharashtra - A landmark case distinguishing murder from culpable homicide."
    },
    2: {
        title: "Constitution of India",
        summary: "The Constitution of India is the fundamental legal document governing the country.",
        content: `
            Adopted on January 26, 1950, it lays the foundation for democracy and governance in India. 
            It guarantees fundamental rights and directives for state policies.
        `,
        sections: [
            { title: "Fundamental Rights", text: "Ensures equality, freedom, and protection from exploitation." },
            { title: "Directive Principles", text: "Guidelines for creating social and economic democracy." },
            { title: "Fundamental Duties", text: "Responsibilities every citizen must uphold." }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Constitution_of_India.jpg/250px-Constitution_of_India.jpg",
        caseStudy: "Kesavananda Bharati v. State of Kerala - Supreme Court ruling on the 'Basic Structure Doctrine.'"
    },
    3: {
        title: "Code of Criminal Procedure (CrPC)",
        summary: "The Code of Criminal Procedure (CrPC) lays down the procedural aspects of criminal law enforcement.",
        content: `
            Enacted in 1973, CrPC provides a framework for the functioning of police, magistrates, and courts in criminal matters.
        `,
        sections: [
            { title: "Section 41", text: "When police may arrest without a warrant." },
            { title: "Section 125", text: "Maintenance of wives, children, and parents." },
            { title: "Section 482", text: "Inherent powers of the High Court to prevent abuse of legal processes." }
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Code_of_Criminal_Procedure.jpg",
        caseStudy: "D.K. Basu v. State of West Bengal - Landmark case on guidelines for police arrests and detainee rights."
    }
};

const LawDetail = () => {
    const { id } = useParams();
    const law = lawDetails[id];
    const [expanded, setExpanded] = useState(false);

    if (!law) {
        return <h2 className="text-center mt-5">Law not found</h2>;
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="law-detail-container"
        >
            <div className="law-header">
                <h1>{law.title}</h1>
                <img src={law.image} alt={law.title} className="law-image"/>
            </div>

            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                className="law-content"
            >
                <h3>Summary</h3>
                <p>{law.summary}</p>

                <h3>Detailed Overview</h3>
                <p>{law.content}</p>

                <h3>Key Sections</h3>
                <ul>
                    {law.sections.map((section, index) => (
                        <li key={index}><strong>{section.title}:</strong> {section.text}</li>
                    ))}
                </ul>

                <h3>Case Study</h3>
                <p><strong>{law.caseStudy}</strong></p>

                <h3 onClick={() => setExpanded(!expanded)} className="expand-section">
                    {expanded ? "▼ Hide Additional Insights" : "▶ Read More Insights"}
                </h3>
                {expanded && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        transition={{ duration: 0.3 }}
                        className="expanded-content"
                    >
                        <p><strong>Historical Context:</strong> This law has evolved over decades to balance justice and governance.</p>
                        <p><strong>Legal Challenges:</strong> Many amendments and Supreme Court judgments have shaped its application.</p>
                        <p><strong>Impact:</strong> Influences policing, judicial procedures, and fundamental rights in India.</p>
                    </motion.div>
                )}
            </motion.div>

            <div className="back-btn">
                <Link to="/library" className="btn btn-primary">⬅ Back to Library</Link>
            </div>
        </motion.div>
    );
};

export default LawDetail;
