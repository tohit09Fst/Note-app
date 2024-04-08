import React, { useState } from 'react'
import Form from './component/Form';
import Notes from './component/Notes';
import Edit from './component/Edit';

export default function App() {
  const[title,settitle]=useState("")
  const[desc,setDesc]=useState("")
  const[notes,setNotes]=useState(getNotesFromLs)
  localStorage.setItem("notes",JSON.stringify(notes))
  return (
    <>
    <Edit/>
      <Form title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}/>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h1 className='mb-3'>Your Notes</h1>
            {
            notes.length=== 0?<div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Message:</h5>
              <p className="card-text">No notes are avaialable for reading.</p>
            </div>
          </div>:notes.map((element)=>{
            return(
              <Notes element={element} key={element.id} notes={notes} setNotes={setNotes}/>
            )
          })
            }
          </div>
        </div>
      </div>
    </>
  )
  function getNotesFromLs(){
    const note= JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note
    }else{
      return[];
    }
  }
}
