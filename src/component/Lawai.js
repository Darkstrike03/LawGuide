import { useState } from "react";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import "./lawai.css"; // Import the external CSS file

export default function LawAI() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "What are my fundamental rights?",
    "What is the punishment for theft in India?",
    "How can I file a consumer complaint?",
    "What are the laws protecting the environment?",
    "What are the rights of employees under labor laws?",
  ]);

  const askBot = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage = { role: "user", content: input.trim() };
    const updatedChat = [...chat, userMessage];

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemma-3-1b-it:free",
          messages: [
            {
              role: "system",
              content: `
              You are LawAI, a legal assistant chatbot focused primarily on Indian law.
              Always respond in clear, simple, and human-friendly language.
              Use Markdown formatting to make your responses visually appealing.
              Use bullet points, bold, italics, and emojis where appropriate.
              `.trim(),
            },
            ...updatedChat,
          ],
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from the chatbot.");
      }

      const data = await res.json();
      const botReply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't find an answer.";

      setChat([...updatedChat, { role: "assistant", content: botReply }]);
    } catch (error) {
      console.error("Error:", error);
      setChat([...updatedChat, { role: "assistant", content: "An error occurred. Please try again later." }]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">LawAI Chatbot</h2>
      <div className="chat-box">
        {chat.length === 0 && !loading && (
          <>
            <div className="chat-placeholder">
              <strong>Ask Anything</strong>
            </div>
            <div className="suggestions">
              <p>Here are some questions you can ask:</p>
              <ul>
                {suggestions.map((question, index) => (
                  <li key={index} onClick={() => setInput(question)}>
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.role === "user" ? "user-bubble" : "assistant-bubble"}`}
          >
            <strong>{msg.role === "user" ? "You" : "LawAI"}:</strong>
            <ReactMarkdown>{msg.content}</ReactMarkdown> {/* Render Markdown */}
          </div>
        ))}
        {loading && <div className="loading-animation">Typing...</div>}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Ask a legal question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && askBot()}
        />
        <button
          onClick={askBot}
          disabled={loading}
          className="chat-button"
        >
          {loading ? "Loading..." : "Ask"}
        </button>
      </div>
    </div>
  );
}
