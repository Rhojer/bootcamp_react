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
      title: newNote,
      body: newNote,
      userId: note.length + 1
    };
    newNoteAdd(addNote).then((response) => {
      setNote(note.concat(response));
    });
  };

  return (
    <div>
      <ul>
        {note.map((note) => {
          return (
            <div key={note.id}>
              <li>
                <h4>{note.title}</h4>
                <p>{note.body}</p>
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
