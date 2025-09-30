import { useMemo } from "react";
import type { StudySession } from "../types/studySession";
import { StudySessionResume } from "./study-session-resume";

interface StudySessionsResumeProps {
  studySessionList: StudySession[];
  removeStudySession: (id: string) => void;
}

export function StudySessionList({
  studySessionList,
  removeStudySession,
}: StudySessionsResumeProps) {
  const totals = useMemo(() => {
    const totalSessions = studySessionList.length;
    const totalMinutes = studySessionList.reduce(
      (acc, cur) => acc + cur.minutes,
      0
    );
    const averageMinutes =
      totalSessions === 0 ? 0 : Math.round(totalMinutes / totalSessions);

    return { totalSessions, totalMinutes, averageMinutes };
  }, [studySessionList]);

  return (
    <>
      <h3 className="text-lg font-semibold mb-2">
        Total de sessões: {totals.totalSessions}
      </h3>
      <p>Total de minutos: {totals.totalMinutes}</p>
      <p>Média de minutos: {totals.averageMinutes}</p>

      <h2 className="font-bold text-gray-600 text-xl mt-4 mb-3">
        Lista de sessões
      </h2>

      {studySessionList.length === 0 ? (
        <p className="text-gray-500">Nenhuma sessão registrada ainda.</p>
      ) : (
        studySessionList.map((session) => (
          <StudySessionResume
            key={session.id}
            removeStudySession={removeStudySession}
            studySession={session}
          />
        ))
      )}
    </>
  );
}
