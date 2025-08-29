import React, { useState, useEffect } from "react";
import { usePlayground } from "@/state/usePlayground";
import { useLibrary } from "@/state/useLibrary";
import DeviceFrame from "./DeviceFrame";

export default function PlaygroundEditor() {
  const { activeHtml, activeJs, setHtml, setJs, width, setWidth } = usePlayground();
  const { components, loadSamples } = useLibrary();
  const [component, setComponent] = useState<any>(null);
  const [editedHtml, setEditedHtml] = useState(activeHtml);  // HTML editable
  const [editedJs, setEditedJs] = useState(activeJs || "");  // JS editable

  useEffect(() => {
    loadSamples();  // Cargar los componentes
  }, [loadSamples]);

  useEffect(() => {
    if (component) {
      setEditedHtml(component.variants[0].html);  // Inicializamos con HTML
      setEditedJs(component.variants[0].js || "");  // Inicializamos con JS
    }
  }, [component]);

  const handleHtmlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedHtml(event.target.value);
    setHtml(event.target.value);  // Actualizar estado global de HTML
  };

  const handleJsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedJs(event.target.value);
    setJs(event.target.value);  // Actualizar estado global de JS
  };

  const handleComponentChange = (id: string) => {
    const selectedComponent = components.find((c) => c.id === id);
    setComponent(selectedComponent);
  };

  return (
    <div>
      <h2>Editar Componente</h2>
      <div>
        {/* Selector de componente */}
        <select
          onChange={(e) => handleComponentChange(e.target.value)}
          className="select select-bordered"
        >
          {components.map((comp) => (
            <option key={comp.id} value={comp.id}>
              {comp.name}
            </option>
          ))}
        </select>
      </div>

      {/* Editor de HTML */}
      <div>
        <label className="block mt-4">Editar HTML</label>
        <textarea
          value={editedHtml}
          onChange={handleHtmlChange}
          rows={10}
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>

      {/* Editor de JS */}
      <div>
        <label className="block mt-4">Editar JS</label>
        <textarea
          value={editedJs}
          onChange={handleJsChange}
          rows={10}
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>

      {/* Previsualización */}
      <div className="mt-4">
        <h3 className="font-semibold">Previsualización:</h3>
        <DeviceFrame width={width} height={600}>
          <iframe
            style={{ width: "100%", height: "100%" }}
            srcDoc={`<html><head><meta charset="utf-8" /></head><body>${editedHtml}<script>${editedJs}</script></body></html>`}
          />
        </DeviceFrame>
      </div>

      {/* Controles para cambiar el ancho */}
      <div className="mt-4">
        <button onClick={() => setWidth(390)} className="btn btn-xs join-item">
          390px
        </button>
        <button onClick={() => setWidth(768)} className="btn btn-xs join-item">
          768px
        </button>
        <button onClick={() => setWidth(1024)} className="btn btn-xs join-item">
          1024px
        </button>
        <button onClick={() => setWidth(1280)} className="btn btn-xs join-item">
          1280px
        </button>
      </div>
    </div>
  );
}
