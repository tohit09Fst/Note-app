import React from 'react';
import './Notes.css';
import jsPDF from 'jspdf';

export default function Notes({ element, notes, setNotes}) {
  console.log(element);

  const removeHandler = (id) => {
    const newNotes = notes.filter((elm) => elm.id !== id);
    setNotes(newNotes);
  };

  const editHandler = (id) => {
    const elem = notes.find((note) => note.id === id);
    if (elem) {
      document.getElementById('edittitle').value = elem.title;
      document.getElementById('editdesc').value = elem.desc;
    }
  };

  const download = (filename) => {
    const pdf = new jsPDF();
    const content = element.title + '\n\n' + element.desc; 
    pdf.text(content, 10, 10);
    pdf.save(`${filename}.pdf`);
  };
  

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">{element.desc}</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => editHandler(element.id)}
        >
          View
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => removeHandler(element.id)}
        >
          Remove
        </button>
        <button className="btn btn-success mx-2" onClick={() => download(element.title)}> Download </button>

      </div>
    </div>
  );
}
