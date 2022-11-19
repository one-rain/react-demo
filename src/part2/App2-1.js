import Note from "./components/Note"

const App = (props) => {
  /**
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
  */
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {props.notes.map(note => <Note key={note.id} note={note} />)}
      </ul>
    </div>
  )
}

export default App