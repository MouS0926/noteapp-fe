import React from 'react'

export default function Editmodal({ showEditModal, setShowEditModal, handleEditNote, title, body, setTitle, setBody }) {
  
  
    const closeModal = () => {
        setShowEditModal(false);
        setTitle("");
        setBody("");
    };
  
    return (
    <div>


{

showEditModal && (
    <div className="modal">
        
        <div className="modal-content">
        <h3 style={{color:"#272525"}}>Edit Note</h3>
            <span className="close" style={{color:"#272525"}} onClick={closeModal}>
                &times;
            </span>
           
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
            <button onClick={handleEditNote}>Save Changes</button>
        </div>
    </div>
)
}


    </div>
  )
}
