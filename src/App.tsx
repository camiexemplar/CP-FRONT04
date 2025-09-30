import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState, useCallback, lazy } from "react";
import type { StudySession } from "./types/studySession";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const AddStudySession = lazy(() =>
  import("./pages/add-study-session").then(m => ({ default: m.AddStudySession }))
);

function App() {
  const [studySessions, setStudySessions] = useState<StudySession[]>([]);

  const addStudySession = useCallback((studySession: StudySession) => {
    setStudySessions(prev => [...prev, studySession]);
  }, []);

  const removeStudySession = useCallback((id: string) => {
    setStudySessions((prev) => {
      const studySessionToDelete = prev.some((studySession) => studySession.id === id);

      if (studySessionToDelete) {
        const newStudySession = prev.filter((studySession) => studySession.id !== id);
        return newStudySession;
      }
      return prev;
    });
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Home
                studySessions={studySessions}
                removeStudySession={removeStudySession}
              />
            } />
            <Route
              path="add"
              element={
                <AddStudySession
                  studySessions={studySessions}
                  onAdd={addStudySession}
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
