import React, { useState } from 'react';

function NoteItem({ note, onEdit, onToggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);

  return (
    <li >
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => {
            onEdit(title);
            setIsEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onEdit(title);
              setIsEditing(false);
            }
          }}
        />
      ) : (
        <div className='NoteItem'>
          <input
            className='check'
            type="checkbox"
            checked={note.completed}
            onChange={onToggle}
          />
          <span className='view' onClick={() => setIsEditing(true)}>{note.title}</span>
          <button className='btndt' onClick={onDelete}>Delete</button>
        </div>
        
      )}
    </li>
  );
}

export default NoteItem;
