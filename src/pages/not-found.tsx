import { Link } from "react-router-dom";
import ImgNotFound from "../assets/error404.png";

export function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>

      <img
        src={ImgNotFound}
        alt="Imagem de erro 404, página não encontrada"
        className="w-2xs justify-self-center"
      />

      <p className="text-gray-600 mb-6">Ops! Parece que você se perdeu</p>

      <Link
        to="/"
        className="text-white bg-gray-700 p-2 rounded hover:underline"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
