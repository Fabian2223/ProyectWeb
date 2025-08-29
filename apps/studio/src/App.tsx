import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const active = (p: string) =>
    pathname === p || pathname.startsWith(p + "/");

  return (
    <div className="min-h-screen bg-base-100 flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-screen w-64 bg-base-200 border-r border-base-300 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        tabIndex={0}
        onBlur={() => setOpen(false)} // Oculta al perder focus
      >
        <div className="p-4 font-bold text-lg">LEGO</div>
        <nav className="menu">
          <ul className="menu rounded-box">
            <li className={active("/") ? "bg-base-300 rounded-md" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={active("/library") ? "bg-base-300 rounded-md" : ""}>
              <Link to="/library">Biblioteca</Link>
            </li>
            <li className={active("/prompts") ? "bg-base-300 rounded-md" : ""}>
              <Link to="/prompts/create">Prompts</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-4 space-y-2 text-xs opacity-70 px-4">
          <p>Consejos: usa la vista Sandbox para probar JS.</p>
          <p>Cambia el tema con <code>data-theme</code> en HTML.</p>
        </div>
      </aside>

      {/* Overlay en mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100/90 backdrop-blur">
          <div className="h-14 px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Botón menú en mobile */}
              <button
                className="md:hidden btn btn-ghost btn-sm"
                onClick={() => setOpen(!open)}
              >
                ☰
              </button>
              <div className="size-8 rounded-lg bg-primary/10 grid place-items-center text-primary font-bold">
                L
              </div>
              <span className="font-semibold">LEGO Biblioteca</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <input
                className="input input-sm input-bordered w-64"
                placeholder="Buscar…"
              />
            </div>
          </div>
        </header>

        {/* Contenido */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
