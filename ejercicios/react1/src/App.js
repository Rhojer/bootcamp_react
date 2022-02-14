import { useState, useEffect} from "react";
import { getNotes, newNoteAdd } from "./services/notes";
import './App.css';

function App() {
  const [note, setNote] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    getNotes().then((note) => {
      setNote(note);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const addNote = {
<<<<<<< HEAD
      body: newNote,
      userId: note.length + 1
    };
    newNoteAdd(addNote)
    .then((response) => {
      setNote((prevNote) => prevNote.concat(response));
=======
      title: newNote,
      body: newNote,
      userId: note.length + 1
    };
    newNoteAdd(addNote).then((response) => {
      setNote(note.concat(response));
>>>>>>> 6887ed93eca29262502b768c3ad9bdc5a232ab3e
    });
  };

  return (
    <div>
<<<<<<< HEAD
      <h2>NOTES</h2>
=======
>>>>>>> 6887ed93eca29262502b768c3ad9bdc5a232ab3e
      <ul>
        {note.map((note) => {
          return (
            <div key={note.id}>
              <li>
<<<<<<< HEAD
                <h4>{note.body}</h4>
=======
                <p>{note.body}</p>
>>>>>>> 6887ed93eca29262502b768c3ad9bdc5a232ab3e
              </li>
            </div>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>add</button>
      </form>
    </div>
  );
      };
<<<<<<< HEAD
=======

>>>>>>> 6887ed93eca29262502b768c3ad9bdc5a232ab3e
export default App;
