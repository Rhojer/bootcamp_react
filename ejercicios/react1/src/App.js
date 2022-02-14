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
      body: newNote,
      userId: note.length + 1
    };
    newNoteAdd(addNote)
    .then((response) => {
      setNote((prevNote) => prevNote.concat(response));
    });
  };

  return (
    <div>
      <h2>NOTES</h2>
      <ul>
        {note.map((note) => {
          return (
            <div key={note.id}>
              <li>
                <h4>{note.body}</h4>
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
export default App;
