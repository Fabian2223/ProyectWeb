import { useEffect, useRef, useState } from "react";
import { usePlayground } from "@/state/usePlayground";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import DeviceFrame from "./DeviceFrame";

export default function PlaygroundIframe() {
  const { activeHtml, activeJs, width, setWidth } = usePlayground();
  const ref = useRef<HTMLIFrameElement>(null);
  const [showConsole, setShowConsole] = useState(false);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;
    const doc = iframe.contentDocument!;
    const html = `<!doctype html>
<html data-theme="lego">
  <head>
    <meta charset="utf-8"/>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    <!-- LEGO runtime (serving from /public/vendor/lego) -->
    <script type="module" src="/vendor/lego/lego-runtime.js"></script>
    <script type="module">
      import { initAll } from "/vendor/lego/lego-runtime.js";
      initAll();
    </script>
  </head>
  <body class="min-h-screen">${activeHtml || ""}</body>
</html>`;
    doc.open(); doc.write(html); doc.close();

    if (activeJs && activeJs.trim()) {
      const s = doc.createElement("script");
      s.type = "module";
      s.textContent = activeJs;
      doc.body.appendChild(s);
    }
  }, [activeHtml, activeJs]);

  return (
    <div className="rounded-xl border border-base-300 overflow-hidden">
      <div className="p-2 bg-base-200 border-b border-base-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Playground (Iframe)</span>
          <div className="join">
            {[390, 768, 1024, 1280].map(w => (
              <button key={w} className="btn btn-xs join-item" onClick={() => setWidth(w)}>{w}</button>
            ))}
          </div>
          <div className="ml-2 flex items-center gap-2">
            <span className="opacity-70 text-xs">Consola</span>
            <input type="checkbox" className="toggle toggle-xs"
              checked={showConsole} onChange={(e) => setShowConsole(e.target.checked)} />
          </div>
        </div>
        <div className="join">
          <button className="btn btn-xs join-item" onClick={() => navigator.clipboard.writeText(activeHtml || "")}>Copiar HTML</button>
          <button className="btn btn-xs join-item" onClick={() => navigator.clipboard.writeText(activeJs || "")}>Copiar JS</button>
        </div>
      </div>

      <PanelGroup direction="horizontal" className="h-[700px]">
        <Panel defaultSize={25} minSize={15}>
          <div className="h-full p-3 space-y-3 bg-base-200 border-r border-base-300">
            <h4 className="font-semibold">Inspector</h4>
            <label className="label"><span className="label-text">Ancho</span></label>
            <input type="range" min={360} max={1280} value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="range range-xs" />
            <div className="text-xs opacity-70">{width}px</div>
            <div className="divider my-2" />
            <p className="text-xs opacity-70">Agrega aquí controles de props/data para el componente.</p>
          </div>
        </Panel>

        <PanelResizeHandle className="w-1 bg-base-300 hover:bg-primary/50 transition cursor-col-resize" />

        <Panel defaultSize={75} minSize={25}>
          <div className="h-full overflow-auto p-3">
            <DeviceFrame width={width} height={600}>
              <iframe ref={ref} style={{ width, height: 600 }} className="w-full h-full bg-base-100" />
            </DeviceFrame>
            {showConsole && (
              <pre className="mt-3 p-3 text-xs bg-base-200 border border-base-300 rounded-lg">
                Abre la consola del navegador (F12) para logs del iframe.
              </pre>
            )}
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
