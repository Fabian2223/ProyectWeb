import { useMemo, useState } from "react";
import { usePlayground } from "@/state/usePlayground";

type Field = { key: string; label: string; type?: 'text'|'url'|'long'; };

function detectFieldsFromHtml(html: string): Field[] {
  const re = /\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g;
  const keys = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) keys.add(m[1]);
  return Array.from(keys).map(k => ({
    key: k,
    label: k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase()),
    type: /url/i.test(k) ? 'url' : 'text'
  }));
}

function applyTokens(html: string, values: Record<string,string>) {
  return html.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_, k) => values[k] ?? '');
}

export default function OptionsPanel({ initialDefaults }: { initialDefaults?: Record<string,string> }) {
  const { activeHtml, setHtml } = usePlayground();
  const fields = useMemo(() => detectFieldsFromHtml(activeHtml), [activeHtml]);
  const [form, setForm] = useState<Record<string,string>>(() => {
    const obj: Record<string,string> = {};
    fields.forEach(f => obj[f.key] = initialDefaults?.[f.key] ?? '');
    return obj;
  });

  const onChange = (key: string, val: string) => {
    const next = { ...form, [key]: val };
    setForm(next);
    setHtml(applyTokens(activeHtml, next));
  };

  if (!fields.length) {
    return <div className="text-xs opacity-70 p-2">Este componente no tiene tokens <code>{'{{token}}'}</code>. Puedes agregarlos al HTML para editarlos desde aquí.</div>;
  }

  return (
    <div className="space-y-3">
      {fields.map(f => (
        <div key={f.key} className="form-control">
          <label className="label"><span className="label-text">{f.label}</span></label>
          {f.type === 'long'
            ? <textarea className="textarea textarea-bordered textarea-sm" value={form[f.key] ?? ''} onChange={e => onChange(f.key, e.target.value)} />
            : <input className="input input-bordered input-sm" type={f.type === 'url' ? 'url' : 'text'} value={form[f.key] ?? ''} onChange={e => onChange(f.key, e.target.value)} />}
        </div>
      ))}
      <button className="btn btn-sm" onClick={() => setHtml(applyTokens(activeHtml, form))}>Aplicar</button>
    </div>
  );
}
