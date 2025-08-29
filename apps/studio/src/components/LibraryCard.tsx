import type { LegoComponent } from '@/types/lego';

export default function LibraryCard({ comp, onPreview }:{ comp: LegoComponent; onPreview:()=>void }) {
  const v = comp.variants.find(v => v.id === comp.defaultVariantId)!;
  return (
    <div className="card bg-base-200 hover:shadow-xl transition">
      <figure className="bg-base-300">
        <img src={v.screenshotUrl || 'https://picsum.photos/seed/lego/800/400'} alt={comp.name} className="object-cover h-40 w-full"/>
      </figure>
      <div className="card-body gap-2">
        <h3 className="card-title text-lg">{comp.name}</h3>
        <p className="text-sm opacity-80">{comp.purpose}</p>
        <div className="flex flex-wrap gap-2">
          {comp.tags.slice(0,4).map(t=> <div key={t} className="badge badge-outline">{t}</div>)}
        </div>
        <div className="card-actions justify-between mt-2">
          <button className="btn btn-primary btn-sm" onClick={onPreview}>Previsualizar</button>
          <div className="join">
            <button className="btn btn-ghost btn-sm" onClick={()=>navigator.clipboard.writeText(v.html)}>Copiar HTML</button>
            {v.js && <button className="btn btn-ghost btn-sm" onClick={()=>navigator.clipboard.writeText(v.js!)}>Copiar JS</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
