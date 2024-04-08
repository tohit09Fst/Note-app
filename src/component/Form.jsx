import React from 'react'
import './Form.css';

export default function Note({title,settitle,desc,setDesc,notes,setNotes}) {
    const inputHandler=(e) =>{
if(e.target.id==="title"){
    settitle(e.target.value)
}else{
    setDesc(e.target.value)
}
    }

    const addNotesHandeler=(e) =>{
        e.preventDefault()
        if(title!==""&&desc!==""){
        setNotes((note)=>{
            return(
                [...note,{
                    title:title,
                    desc:desc,
                    id:new Date().getTime()
                }]
            )
        })
    } 
        settitle("");
        setDesc("");
    }
    return (
        <>
           <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                <form className='box'>
                <div class="mb-3">
                    <label for="text" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder='enter your title' value={title} onChange={inputHandler}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                   <textarea name="desc" id="desc" cols="30" rows="3" className='form-control' placeholder='Inter the notes' value={desc} onChange={inputHandler}></textarea>
                </div>
                
                
                <button type="submit" className="btn btn-primary" onClick={addNotesHandeler}>Add Notes</button>

            </form>
                </div>
            </div>
           </div>

        </>
    )
}
