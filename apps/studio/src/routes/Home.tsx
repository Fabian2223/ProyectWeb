import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Bienvenido a LEGO Biblioteca</h2>
      <p className="opacity-80">Explora, edita y copia componentes listos para producción.</p>
      <div className="flex gap-3">
        <Link className="btn btn-primary" to="/library">Ir a Biblioteca</Link>
        <Link className="btn" to="/prompts/create">Crear Prompt</Link>
      </div>
    </div>
  );
}
