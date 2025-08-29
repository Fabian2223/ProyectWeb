import type { PropsWithChildren } from "react";
import clsx from "clsx";

export default function DeviceFrame(
  { width = 1000, height = 600, className, children }:
  PropsWithChildren<{ width?: number; height?: number; className?: string }>
) {
  return (
    <div
      className={clsx(
        "rounded-2xl shadow-2xl border border-base-300 bg-base-100 overflow-hidden",
        className
      )}
      style={{ width }}
    >
      <div className="flex items-center gap-2 p-2 bg-base-200 border-b border-base-300">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-error/80" />
          <span className="w-3 h-3 rounded-full bg-warning/80" />
          <span className="w-3 h-3 rounded-full bg-success/80" />
        </div>
        <div className="input input-sm input-bordered w-full">
          <span className="opacity-60 text-xs px-2">https://preview.lego</span>
        </div>
      </div>
      <div className="bg-[linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(0deg,rgba(0,0,0,.04)_1px,transparent_1px)] bg-[size:24px_24px]">
        <div style={{ height }} className="bg-base-100">{children}</div>
      </div>
    </div>
  );
}
