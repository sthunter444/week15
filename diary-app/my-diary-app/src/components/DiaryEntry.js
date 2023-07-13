// DiaryEntry.js
import React, { useState } from 'react';

const DiaryEntry = ({ entry, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(entry.title);
  const [updatedContent, setUpdatedContent] = useState(entry.content);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(entry.id, { title: updatedTitle, content: updatedContent });
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(entry.id);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <textarea
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
        ></textarea>
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    );
  }

  return (
    <div className="diary-entry">
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DiaryEntry;
