import React from "react";
import "./FormattedText.css";

const FormattedText = ({ text }) => {
  // Function to parse and format the text
  const parseText = (text) => {
    // Split text into paragraphs based on double newlines
    const paragraphs = text.split(/\n\n/);

    return paragraphs.map((paragraph, index) => {
      // Process each paragraph for mentions, links, and bullet points
      const parts = paragraph.split(/(\s+)/).map((part, subIndex) => {
        if (part.startsWith("@")) {
          return (
            <span key={`${index}-${subIndex}`} className="mention">
              {part}
            </span>
          );
        } else if (part.startsWith("http://") || part.startsWith("https://")) {
          return (
            <a
              key={`${index}-${subIndex}`}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {part}
            </a>
          );
        } else if (part.startsWith("-")) {
          return (
            <li key={`${index}-${subIndex}`} className="bullet">
              {part.slice(1).trim()}
            </li>
          );
        }
        return part;
      });

      return (
        <p key={index} className="paragraph">
          {parts}
        </p>
      );
    });
  };

  return <div className="formatted-text">{parseText(text)}</div>;
};

export default FormattedText;