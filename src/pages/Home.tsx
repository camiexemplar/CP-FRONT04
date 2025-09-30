import { StudySessionList } from "../components/study-session-list";
import type { StudySession } from "../types/studySession";

interface HomeProps {
  studySessions: StudySession[];
  removeStudySession: (id: string) => void;
}

export function Home({ studySessions, removeStudySession }: HomeProps) {
  return (
    <>
      <StudySessionList removeStudySession={removeStudySession} studySessionList={studySessions} />
    </>
  );
}
