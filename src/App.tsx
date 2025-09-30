import { lazy, Suspense, useCallback, useState } from "react";
import { Home } from "./pages/Home"
import type { StudySession } from "./types/studySession";

const AddStudySession = lazy(() =>
  import("./pages/add-study-session").then((module) => ({
    default: module.AddStudySession,
  }))
);

function App() {
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);

  const addStudySession = useCallback((studySession: StudySession) => {
    setStudySessions((prev) => [...prev, studySession]);
  }, []);
  return (
    <>
    <Home />
    <Suspense fallback={<div>Loading...</div>}>
      <AddStudySession studySessions={studySessions} onAdd={addStudySession} />
    </Suspense>
    </>
  )
}

export default App
