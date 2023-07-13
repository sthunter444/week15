// DiaryList.js
import React from 'react';
import DiaryEntry from './DiaryEntry';

const DiaryList = ({ entries, onUpdate, onDelete }) => {
  return (
    <div className="diary-list">
      {entries.map((entry) => (
        <DiaryEntry
          key={entry.id}
          entry={entry}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default DiaryList;
