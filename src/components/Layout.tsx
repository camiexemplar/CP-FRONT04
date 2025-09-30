import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">StudyLog</h1>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/add">Nova Sessão</Link>
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
