import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, getState } from "react-redux";
import { toggleAuth,toggleToken } from "../reduxSrore/action";
import store from "../reduxSrore/store";


export function UserNotes() {
    const [allUserNote, setAllUserNote] = useState([]);
    const [authStatusChanged, setAuthStatusChanged] = useState(0);
    const [reRender,setReRender] = useState(0);
    const dispatch = useDispatch();
    async function getAllUserNote() {
        let { token } = store.getState().tokenReducer;
        console.log('token', token)
        let allNotePromise2 = await fetch(`http://localhost:8080/note`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                token
            }
        })
        let allNotePromise1 = await allNotePromise2;
        let allNote = await allNotePromise1.json();
        setAllUserNote(allNote);
        console.log(allNote)
        // console.log('allNote',allNote)
    }
    async function update(e){
        console.log('id',e.id)
        let _id=e.id
        // console.log('work',e.work)
        console.log('e.target',e)
        console.log('name',e.name)
        let upDateData
        if(e.name=='true'){
            upDateData='false'
        }else{
            upDateData="true"
        }
        console.log('data to update',upDateData)
        let { token } = store.getState().tokenReducer;

        await fetch(`http://localhost:8080/note/${_id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json',
                token
            },
            body:JSON.stringify({workStatus:upDateData})
        })
        setReRender(reRender+1);

    }
    async function deleteNote(id){
        console.log("_id",id)
        let { token } = store.getState().tokenReducer;

        await fetch(`http://localhost:8080/note/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json',
                token
            },
            
        })
        setReRender(reRender+1);
        // getAllUserNote()
    }

    useEffect(() => {
        getAllUserNote()
    }, [reRender])


    return (
        <>
        <div>
            <Button style={{marginLeft:"80%"}} >Logout</Button>
        </div>
        <div style={{display:'grid',gap:'10px',gridTemplateColumns:"repeat(3,1fr)"}}>
            {allUserNote.map((data) => (
                <div key={data._id} style={{border:"1px blue solid"}}>
                    <h1>{data.title}</h1>
                    {
                        data.workStatus=='true' ?
                            <>
                                <h4>Completed</h4>
                                <Button id={data._id} name={data.workStatus} onClick={(e)=>{update(e.target)}}>Mark as Not Completed</Button>
                                <Button id={data._id} name={data.workStatus} onClick={(e)=>{deleteNote(e.target.id)}}>Delete</Button>
                            </>
                            :
                            <>
                                <h4>Not Completed</h4>
                                <Button id={data._id} name={data.workStatus} onClick={(e)=>{update(e.target)}}>Mark as completed</Button>
                                <Button id={data._id} name={data.workStatus} onClick={(e)=>{deleteNote(e.target.id)}}>Delete</Button>
                            </>
                    }

                    
                </div>
            ))}
            </div>
        </>
    )
}