import { useEffect } from 'react';
import { useLibrary } from '@/state/useLibrary';
import LibraryCard from '@/components/LibraryCard';
import { useNavigate } from 'react-router-dom';

export default function Library(){
  const { components, loadSamples } = useLibrary();
  const nav = useNavigate();
  useEffect(() => { loadSamples(); }, []);
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Biblioteca</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map(c => (
          <LibraryCard key={c.id} comp={c} onPreview={() => nav(`/library/${c.id}`)} />
        ))}
      </div>
    </div>
  );
}
