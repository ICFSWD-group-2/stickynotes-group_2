import React, { useState } from 'react';
import NoteList from './component/NoteList';
import NoteForm from './component/NoteForm';
import Filter from './component/Filter';

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const addNote = (title) => {
    setNotes([...notes, { title, completed: false }]);
  };

  const toggleNotes = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].completed = !updatedNotes[index].completed;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index, title) => {
    const updatedNotes = [...notes];
    updatedNotes[index].title = title;
    setNotes(updatedNotes);
  };

  const filterNotes = notes.filter((note) => {
    if (filter === 'all') {
      return note.title.includes(search);
    } else if (filter === 'completed') {
      return note.completed && note.title.includes(search);
    } else {
      return !note.completed && note.title.includes(search);
    }
  });

  return (
    <div>
      <h1>Sticky-Notes</h1>

      <div className='box'>
      <Filter filter={filter} setFilter={setFilter} />
      <input 
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      <div className='addnote'>
      <NoteForm addNote={addNote} />
      </div>
      <div className='notelist'>
      <NoteList
        notes={filterNotes}
        editNote={editNote}
        toggleNotes={toggleNotes}
        deleteNote={deleteNote}
      />
      </div>
    </div>
  );
}

export default App;
