export type AiBundle = {
template: 'vanilla' | 'react' | 'vue'
files: Record<string, { code: string; hidden?: boolean; active?: boolean }>
dependencies?: Record<string, string>
}


export const defaultVanillaBundle = (html?: string, js?: string): AiBundle => ({
template: 'vanilla',
files: {
'/index.html': { code: `<!doctype html><html><head><meta charset='utf-8'><script src=\"https://cdn.tailwindcss.com\"></script></head><body class=\"min-h-screen\">${html || ''}<script type=\"module\">${js || ''}<\/script></body></html>` }
},
dependencies: {}
})