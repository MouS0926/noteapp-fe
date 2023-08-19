import React, { useEffect, useState } from 'react'
import "./Notes.css"
import { deleteNote, editNote, fetchNotes, logoutUser, postNotes } from '../Api/Api';
import { MdAddCircle } from "react-icons/md";
import { SlLogout } from "react-icons/sl";

import { RiEditCircleFill,RiDeleteBin5Fill } from "react-icons/ri";
import Editmodal from '../Modals/Editmodal';
import { Navigate } from 'react-router-dom';

export default function Notes() {

    const [notes,setNotes]=useState([])
    const [showModal, setShowModal] = useState(false);
    const [showEditModal,setShowEditModal]=useState(false)
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [editnoteid,setEditnoteid]=useState("")
const [islogout,setlogout]=useState(false)

    //read all notes
     const getNotes=()=>{
        fetchNotes()
        .then((res)=>{
            console.log(res);
            setNotes(res)
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getNotes()
    },[])
//post a note
    const handleAddNote = (e) => {
         e.preventDefault()
    const note={
        title,
        body
    }

    postNotes(note)
    .then((res)=>{
        getNotes()
        setTitle("")
        setBody("")
       console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    setShowModal(false)

    };
  
//edit note
const handleEditNote=(editnoteid)=>{
    let updatednote={
title,body
    }
    editNote(editnoteid,updatednote)
    .then((res)=>{
        getNotes(); // Fetch notes again after editing
        setTitle("");
        setBody("");
        setShowEditModal(false); // Close the edit modal
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}
 
//delete note
const handleDelete=(noteid)=>{
    
    deleteNote(noteid)
    .then((res)=>{
        getNotes()
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}


//logout

const handleLogout = () => {
    logoutUser()
    .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        setlogout(true)
       
    })
    .catch((err) => {
        console.log(err);
    });
}

if(islogout){
    return <Navigate to="/login" />
}
  return (
    <div className='bgcolor'>
    <h2> 🔗 Notes Taking Application 🔗 </h2>

<div className="logoutdiv">
    <button onClick={() => setShowModal(true)}><MdAddCircle/>Add New Note</button>
    <button onClick={handleLogout}><SlLogout/> Logout</button>
</div>

 <br /> <br />
{showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" style={{color:"#272525"}}  onClick={() => setShowModal(false)}>
                            &times;
                        </span>
                        <h3 style={{color:"#272525"}}>Add Note</h3>
                        <input
                            type="text"
                            placeholder="Title"
                          value={title}
                          onChange={(e)=>setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Body"
                           value={body}
                           onChange={(e)=>setBody(e.target.value)}
                        />
                        <button onClick={handleAddNote}>Add Note</button>
                    </div>
                </div>
            )}



{/* edit-modal */}

<Editmodal  showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
                handleEditNote={()=>handleEditNote(editnoteid)}
                
                title={title}
                body={body}
                setTitle={setTitle}
                setBody={setBody}
                />

<div className='notebox'>
{
            notes && notes.map((el)=>(
                <div key={el._id}>

                    <h4>📌 {el.title}</h4>
                    <p>{el.body}</p>
                    <button className='editbtn' onClick={()=>{
                        setTitle(el.title)
                        setBody(el.body)
                        setEditnoteid(el._id)
                        setShowEditModal(true)
                    }
                
                        }>
                            <RiEditCircleFill/> 
                             </button>
                    <button className='deletebutton'
                     onClick={() => {
                        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
                        if (confirmDelete) {
                            handleDelete(el._id);
                        }
                    }}
                     >
                        <RiDeleteBin5Fill/>
                        
                        </button>
                </div>
                
            ))
        }


</div>
       

    </div>
  )
}
