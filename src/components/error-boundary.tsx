import type { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
      const navigate = useNavigate();

  const handleHome = () => {
    resetErrorBoundary(); 
    navigate("/");    
  };
  return (
    <div className="text-center">
      <p className="mb-4 text-red-600">{error.message}</p>
      <button
        onClick={handleHome}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Tentar novamente
      </button>
    </div>
  );
}
