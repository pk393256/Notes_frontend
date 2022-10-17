import { useState,useEffect } from "react";
import { useDispatch,getState } from "react-redux";
import store from "../reduxSrore/store";


export function UserNotes(){
    const [allUserNote,setAllUserNote] = useState([]);
    const [authStatusChanged,setAuthStatusChanged] = useState(0);

    async function getAllUserNote(){
        let {token} = store.getState().tokenReducer;
        console.log('token',token)
        let allNotePromise2 = await fetch(`http://localhost:8080/note`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                token
            }
        })
        let allNotePromise1 = await allNotePromise2;
        let allNote = await allNotePromise1.json();
        setAllUserNote(allNote);
        // console.log('allNote',allNote)
    } 
    useEffect(()=>{
        getAllUserNote()
    },[])


    return (
        <>
        {allUserNote.map((data)=>(
            <>
            <h1>{data.title}</h1>
            {data.status?<h4>Completed</h4>:<h4>Not Completed</h4>}
            </>
        ))}
        </>
    )
}