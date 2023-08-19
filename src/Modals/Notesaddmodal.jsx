
import React, { useState } from 'react';
import "./Notes.css"
export default function NotesaddModal({ showModal, setShowModal, handleAddNote }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const closeModal = () => {
        setShowModal(false);
        setTitle("");
        setBody("");
    };

    return (
        showModal && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                        &times;
                    </span>
                    <h2>Add Note</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button onClick={() => handleAddNote({ title, body })}>Add Note</button>
                </div>
            </div>
        )
    );
}
