import { Link } from "react-router-dom";
import type { StudySession } from "../types/studySession";

interface StudySessionsResumeProps {
  studySession: StudySession;
  removeStudySession: (id: string) => void;
}

export function StudySessionResume({ studySession, removeStudySession }: StudySessionsResumeProps) {
  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 bg-white mb-3">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{studySession.subject}</h2>

        <div className="flex flex-col gap-2">
          <Link
            to={`/studySession/${studySession.id}`}
            state={{ studySession }}
            className="btn"
          >
            Detalhes
          </Link>

          <button
            className="p-2 bg-red-600 text-white font-bold hover:cursor-pointer rounded"
            onClick={() => removeStudySession(studySession.id)}
          >
            Remover Sessão
          </button>
        </div>
      </div>

      <h3>Data: {studySession.date}</h3>
    </div>
  );
}