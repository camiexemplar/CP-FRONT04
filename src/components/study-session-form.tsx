import { useState } from "react";
import type { StudySession } from "../types/studySession";

interface StudySessionFormProps {
  onAdd: (studySession: StudySession) => void;
}

export function StudySessionForm({ onAdd }: StudySessionFormProps) {
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");


  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const studySession: StudySession = {
      id: crypto.randomUUID(),
      subject,
      minutes,
      date,
      notes,
    };

    onAdd(studySession);

    setSubject("");
    setMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 w-4/5 mb-5"
    >
      <label htmlFor="study-session-subject">Assunto</label>
      <input
        type="text"
        id="study-session-subject"
        placeholder="Assunto"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        className="border rounded p-2"
      />

      <label htmlFor="study-session-duration">Duração (min)</label>
      <input
        type="number"
        id="study-session-duration"
        placeholder="Duração (min)"
        onChange={(e) => setMinutes(Number(e.target.value))}
        value={minutes}
        className="border rounded p-2"
      />

      <label htmlFor="study-session-date">Data</label>
      <input
        type="date"
        id="study-session-date"
        placeholder="Data"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border rounded p-2"
      />

      <label htmlFor="study-session-notes">Anotações</label>
      <input
        type="text"
        id="study-session-notes"
        placeholder="Notas"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        className="border rounded p-2"
      />

      <button className="btn" type="submit">
        Adicionar sessão de estudo
      </button>
    </form>
  );
}
