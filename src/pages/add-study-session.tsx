import { useMemo } from "react";
import { StudySessionForm } from "../components/study-session-form";
import type { StudySession } from "../types/studySession";

interface AddStudySessionProps {
  studySessions: StudySession[];
  onAdd: (studySession: StudySession) => void;
}

export function AddStudySession({ studySessions, onAdd }: AddStudySessionProps) {
  const studyMinutes = useMemo(() => {
    let studyMinutesRealized: number = 0;

    studySessions.forEach((value) => {
      studyMinutesRealized += value.minutes;
    });

    const hours = Math.floor(studyMinutesRealized / 60);
    const minutes = studyMinutesRealized % 60;

    return `${hours}:${minutes}`;
  }, [studySessions]);

  return (
    <>
      <h2 className="font-bold text-blue-800 text-xl mb-3">
        Adicionar nova sessão de estudo
      </h2>

      <h3>Tempo de estudo: {studyMinutes}</h3>

      <StudySessionForm onAdd={onAdd} />
    </>
  );
}
