import React from 'react';

const NoteList = ({ notes }) => (
  <ul>
    {notes.map(note => (
      <li key={note.id}>{note.text}</li>
    ))}
  </ul>
);