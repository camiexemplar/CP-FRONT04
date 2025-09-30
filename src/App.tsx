import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState, useCallback, lazy } from "react";
import type { StudySession } from "./types/studySession";
import Layout from "./components/Layout";
import { NotFound } from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/error-boundary";

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
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
            <Route path="*" 
            element={
            <NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
