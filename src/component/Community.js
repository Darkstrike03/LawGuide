import React, { useState } from 'react';

const Community = () => {
    const [posts, setPosts] = useState([
        { id: 1, user: "John Doe", content: "What are the fundamental rights in the Indian Constitution?", likes: 10, comments: ["Right to Equality", "Right to Freedom"] },
        { id: 2, user: "Jane Smith", content: "How does Article 21 protect individual rights?", likes: 5, comments: ["Covers Right to Life & Personal Liberty"] }
    ]);
    
    const [newPost, setNewPost] = useState("");

    const handlePostSubmit = () => {
        if (newPost.trim() !== "") {
            setPosts([...posts, { id: posts.length + 1, user: "Anonymous", content: newPost, likes: 0, comments: [] }]);
            setNewPost("");
        }
    };

    const handleLike = (postId) => {
        setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Community Discussions</h1>
            
            {/* New Post Section */}
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    placeholder="Ask a legal question or share insights..." 
                    value={newPost} 
                    onChange={(e) => setNewPost(e.target.value)}
                ></textarea>
                <button className="btn btn-primary mt-2" onClick={handlePostSubmit}>Post</button>
            </div>

            {/* Posts Section */}
            <div className="mt-3">
                {posts.map(post => (
                    <div key={post.id} className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{post.user}</h5>
                            <p className="card-text">{post.content}</p>
                            <button className="btn btn-outline-primary btn-sm" onClick={() => handleLike(post.id)}>👍 {post.likes}</button>
                            <div className="mt-2">
                                <strong>Comments:</strong>
                                <ul>
                                    {post.comments.map((comment, index) => (
                                        <li key={index}>{comment}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
