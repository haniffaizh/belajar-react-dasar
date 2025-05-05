import Note from "./Note.jsx";

export default function NoteList({notes, onChange, onDelete}) {
    return (
        <ul>
            {notes.map((note, index) => (
                <li key={index}>
                    <Note key={index} note={note} onChange={onChange} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    )
}