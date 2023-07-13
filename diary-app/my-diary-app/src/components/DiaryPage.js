// DiaryPage.js
import React, { useEffect, useState } from 'react';
import DiaryList from './DiaryList';
import DiaryForm from './DiaryForm';
import api from '../services/api';

const DiaryPage = () => {
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    fetchDiaryEntries();
  }, []);

  const fetchDiaryEntries = async () => {
    try {
      const response = await api.get('/diary-entries');
      setDiaryEntries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createDiaryEntry = async (newEntry) => {
    try {
      const response = await api.post('/diary-entries', newEntry);
      setDiaryEntries([...diaryEntries, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDiaryEntry = async (id, updatedEntry) => {
    try {
      await api.put(`/diary-entries/${id}`, updatedEntry);
      const updatedEntries = diaryEntries.map((entry) =>
        entry.id === id ? { ...entry, ...updatedEntry } : entry
      );
      setDiaryEntries(updatedEntries);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDiaryEntry = async (id) => {
    try {
      await api.delete(`/diary-entries/${id}`);
      const updatedEntries = diaryEntries.filter((entry) => entry.id !== id);
      setDiaryEntries(updatedEntries);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="diary-page">
      <h1>Personal Diary</h1>
      <DiaryForm onSubmit={createDiaryEntry} />
      <DiaryList
        entries={diaryEntries}
        onUpdate={updateDiaryEntry}
        onDelete={deleteDiaryEntry}
      />
    </div>
  );
};

export default DiaryPage;
