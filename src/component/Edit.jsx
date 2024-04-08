import React from 'react'
import './Edit.css';

export default function Edit() {
  return (
    <>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
      <form className='second'>
                <div class="mb-3">
                    <label for="text" className="form-label">Title</label>
                    <input type="text" className="form-control" id="edittitle" placeholder='enter your title'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Your notes</label> 
                   <textarea name="desc" id="editdesc" cols="30" rows="19" className='form-control' placeholder='Inter the notes'></textarea>
                </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Back</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
