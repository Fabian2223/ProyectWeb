import {
  SandpackProvider, SandpackCodeEditor, SandpackPreview, SandpackConsole,
} from "@codesandbox/sandpack-react";
import { useMemo, useState } from "react";
import { usePlayground } from "@/state/usePlayground";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import DeviceFrame from "./DeviceFrame";

const theme = { colors:{ surface1:"#0f172a", surface2:"#111827", surface3:"#0b1320",
  clickable:"#1f2937", base:"#d1d5db", disabled:"#4b5563", hover:"#334155", accent:"#2563eb", error:"#ef4444" },
  syntax:{ plain:"#e5e7eb", comment:{color:"#9ca3af",fontStyle:"italic"}, keyword:"#93c5fd", tag:"#c4b5fd",
  punctuation:"#e5e7eb", definition:"#fca5a5", property:"#a7f3d0", static:"#fcd34d", string:"#fde68a" },
  font:{ mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace", size:"12px", lineHeight:"1.6" }
} as const;

export default function PlaygroundSandpack({ sandpackKey }: { sandpackKey: string }) {
  const { activeHtml, activeJs } = usePlayground();
  const [showConsole, setShowConsole] = useState(false);
  const [frameWidth, setFrameWidth] = useState(1000);

  const files = useMemo(() => {
    const origin = window.location.origin;
    const html = `<!doctype html>
<html data-theme="lego">
<head>
  <meta charset='utf-8'>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

  <!-- LEGO runtime para Sandpack -->
  <script type="module" src="${origin}/vendor/lego/lego-runtime.js"></script>
  <script type="module">
    import { initAll } from "${origin}/vendor/lego/lego-runtime.js";
    initAll();
  </script>
</head>
<body class="min-h-screen">
  ${activeHtml || ""}
  <script type="module">${activeJs || ""}<\/script>
</body>
</html>`;
    return { "/index.html": { code: html, active: true } };
  }, [activeHtml, activeJs]);

  return (
    <div className="rounded-xl border border-base-300 overflow-hidden">
      <div className="p-2 bg-base-200 border-b border-base-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Sandbox</span>
          <div className="join">
            {[390,768,1024,1280].map(w=>(
              <button key={w} className="btn btn-xs join-item" onClick={()=>setFrameWidth(w)}>{w}</button>
            ))}
          </div>
        </div>
        <label className="label cursor-pointer gap-2">
          <span className="label-text text-xs">Consola</span>
          <input type="checkbox" className="toggle toggle-xs" checked={showConsole} onChange={e=>setShowConsole(e.target.checked)}/>
        </label>
      </div>

      <PanelGroup direction="horizontal" className="h-[700px]">
        <Panel defaultSize={45} minSize={25}>
          <SandpackProvider
            key={sandpackKey}
            files={files}
            theme={theme as any}
            customSetup={{ environment: "static", entry: "/index.html" }}
          >
            <div className="h-full grid grid-rows-[1fr,auto]">
              <SandpackCodeEditor showTabs showLineNumbers showInlineErrors className="!h-full"/>
              {showConsole && <div className="border-t border-base-300"><SandpackConsole showHeader={false}/></div>}
            </div>
          </SandpackProvider>
        </Panel>

        <PanelResizeHandle className="w-1 bg-base-300 hover:bg-primary/50 transition cursor-col-resize" />

        <Panel defaultSize={55} minSize={25}>
          <SandpackProvider
            key={sandpackKey+"-preview"}
            files={files}
            theme={theme as any}
            customSetup={{ environment: "static", entry: "/index.html" }}
          >
            <div className="h-full overflow-auto p-3">
              <DeviceFrame width={frameWidth} height={600}>
                <SandpackPreview style={{ height: 600 }} showOpenInCodeSandbox={false} />
              </DeviceFrame>
            </div>
          </SandpackProvider>
        </Panel>
      </PanelGroup>
    </div>
  );
}
