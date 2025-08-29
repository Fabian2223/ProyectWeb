import { useState } from 'react';

export default function PromptsAdd(){
  const [raw, setRaw] = useState('');
  const onParse = () => {
    try {
      const json = JSON.parse(raw);
      alert('Estructura válida. (MVP: guardar pendiente de backend)');
      console.log(json);
    } catch (e:any) {
      alert('JSON inválido: '+ e.message);
    }
  };
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Agregar Componente desde Prompt</h2>
      <textarea className="textarea textarea-bordered font-mono w-full" rows={12} value={raw} onChange={e=>setRaw(e.target.value)} placeholder='{ "component": { ... } }' />
      <button className="btn" onClick={onParse}>Validar</button>
    </div>
  );
}
