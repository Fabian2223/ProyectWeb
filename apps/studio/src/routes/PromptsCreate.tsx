import { useState } from 'react';

export default function PromptsCreate(){
  const [name, setName] = useState('Hero Split');
  const [kind, setKind] = useState('hero');
  const [purpose, setPurpose] = useState('Hero para landing B2B con CTA');

  const prompt = `Quiero que generes un componente LEGO en formato JSON con estructura {component:{...}}
Datos:
- Nombre: ${name}
- Kind: ${kind}
- Propósito: ${purpose}
- Compatibilidad JS: ["vanilla","alpine"]
- Variantes esperadas: ["Imagen derecha","Compacto"]
- Responsive: sm→stack, md→grid 2 cols
- Accesibilidad: foco visible, roles, aria-labels

Entrega: JSON con fields id,name,kind,purpose,tags,jsCompat,defaultVariantId,variants[],tailwindNotes,playgroundTemplate,dbSuggestion,createdAt,updatedAt`;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Crear Prompt</h2>
      <div className="grid gap-3 max-w-3xl">
        <input className="input input-bordered" value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre"/>
        <select className="select select-bordered" value={kind} onChange={e=>setKind(e.target.value)}>
          <option value="hero">Hero</option><option value="card">Card</option><option value="navbar">Navbar</option><option value="form">Form</option>
        </select>
        <textarea className="textarea textarea-bordered" value={purpose} onChange={e=>setPurpose(e.target.value)} placeholder="Propósito"/>
        <label className="label"><span className="label-text">Prompt generado</span></label>
        <textarea className="textarea textarea-bordered font-mono" rows={10} readOnly value={prompt}/>
        <button className="btn btn-primary" onClick={()=>navigator.clipboard.writeText(prompt)}>Copiar</button>
      </div>
    </div>
  );
}
