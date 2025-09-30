import { Link, useLocation, useParams } from "react-router-dom";
import { StudySessionCard } from "../components/study-session-card";

export function StudyDetails() {
  const { id } = useParams();

  const { state } = useLocation();

  if (!state?.studySession) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-bold text-red-600">Erro: Dados não encontrados</h2>
        <p className="mt-2">
          Por favor, volte para a página anterior e clique em "Detalhes" novamente.
        </p>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Voltar para a Página Inicial
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">
        Detalhes da Sessão - ID {id}
      </h2>
      <StudySessionCard studySession={state.studySession} />
      <Link to="/" className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Voltar para a lista
      </Link>
    </>
  );
}