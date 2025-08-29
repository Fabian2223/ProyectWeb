export const API_BASE =
  (import.meta as any).env?.VITE_API ?? 'http://127.0.0.1:8000/api';

export async function getComponents() {
  const res = await fetch(`${API_BASE}/components`);
  if (!res.ok) throw new Error('Error al cargar componentes');
  return res.json();
}

// añade aquí otros helpers (POST/PUT) cuando conectes Laravel
