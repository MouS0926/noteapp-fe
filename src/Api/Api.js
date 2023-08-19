export const fetchNotes=()=>{
   return fetch("https://note-app-api-p9q3.onrender.com/notes",{
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then((res)=>{
        return res.json()
    })
    
}

export const postNotes=(note)=>{
   return fetch("https://note-app-api-p9q3.onrender.com/notes/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(note)
    })
    .then((res)=>{
        return res.json()
    })
}

export const editNote=(noteid,updatednotes)=>{
return fetch(`https://note-app-api-p9q3.onrender.com/notes/update/${noteid}`,{
    method:"PATCH",
    headers:{
        "Content-type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
    body:JSON.stringify(updatednotes)
})
.then((res)=>{
    return res.json()
})
}

export const deleteNote=(noteid)=>{
    return fetch(`https://note-app-api-p9q3.onrender.com/notes/delete/${noteid}`,{
    method:"DELETE",
    headers:{
        "Content-type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
    
})
.then((res)=>{
    return res.json()
})
}


export const logoutUser = () => {
    return fetch("https://note-app-api-p9q3.onrender.com/users/logout", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then((res) => res.json())
   
}
