import { normalizeHtml } from './normalizeHtml'
export const fingerprint = (html: string, js?: string) => {
const norm = normalizeHtml(html)
const data = norm + '||' + (js || '')
// Simple hash (MVP). En producción usa SHA‑256.
let h = 0; for (let i=0;i<data.length;i++){ h = (h<<5)-h + data.charCodeAt(i); h|=0 }
return `${h}`
}