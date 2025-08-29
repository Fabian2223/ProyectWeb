import { useParams } from 'react-router-dom';
import { useLibrary } from '@/state/useLibrary';
import { useEffect, useMemo, useState } from 'react';
import PlaygroundIframe from '@/components/PlaygroundIframe';
import PlaygroundSandpack from '@/components/PlaygroundSandpack';
import { usePlayground } from '@/state/usePlayground';
import OptionsPanel from '@/components/OptionsPanel';

export default function LibraryItem(){
  const { id } = useParams();
  const { getById, loadSamples } = useLibrary();
  const comp = getById(id!);
  const { setHtml, setJs, mode, setMode } = usePlayground();
  const [variantId, setVariantId] = useState<string | undefined>(undefined);

  useEffect(() => { if(!comp) loadSamples(); }, []);
  const v = useMemo(() => comp?.variants.find(x => x.id === (variantId || comp?.defaultVariantId)), [comp, variantId]);

  useEffect(() => { if (v) { setHtml(v.html); setJs(v.js); } }, [v?.id, comp?.id]);

  if(!comp) return <div className="skeleton h-48 w-full" />;

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6">
      <section className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-2xl font-bold">{comp.name}</h2>
            <p className="opacity-80">{comp.purpose}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {comp.tags.map(t => <span key={t} className="badge badge-outline">{t}</span>)}
            </div>
          </div>
          <div className="join">
            <select className="select select-sm join-item" value={v?.id} onChange={e=>setVariantId(e.target.value)}>
              {comp.variants.map(vv => <option key={vv.id} value={vv.id}>{vv.name}</option>)}
            </select>
            <button className={`btn btn-sm join-item ${mode==='iframe'?'btn-primary':''}`} onClick={()=>setMode('iframe')}>Iframe</button>
            <button className={`btn btn-sm join-item ${mode==='sandpack'?'btn-primary':''}`} onClick={()=>setMode('sandpack')}>Sandpack</button>
          </div>
        </div>

        <div key={`${comp.id}-${v?.id}-${mode}`}>
          {mode==='iframe' ? <PlaygroundIframe/> : <PlaygroundSandpack sandpackKey={`${comp.id}-${v?.id}`}/>}
        </div>
      </section>

      <aside className="bg-base-200 rounded-xl border border-base-300 p-4 h-fit sticky top-20">
        <h3 className="font-semibold mb-2">Opciones</h3>
        <OptionsPanel
          initialDefaults={{
            title: 'Impulsa tu producto',
            subtitle: 'Texto de soporte con beneficios claros y breves.',
            primary_cta: 'Comenzar',
            secondary_cta: 'Ver más',
            image_url: 'https://picsum.photos/800/600'
          }}
        />
        <div className="divider" />
        <div className="text-xs opacity-70 space-y-2">
          <p><b>Compatibilidad JS:</b> {comp.jsCompat.join(', ') || '—'}</p>
          <p>Accesibilidad y notas se muestran dentro de la doc de cada variante.</p>
        </div>
      </aside>
    </div>
  );
}
