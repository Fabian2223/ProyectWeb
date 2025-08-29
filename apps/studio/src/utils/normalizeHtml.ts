export const normalizeHtml = (html: string) => html
.replace(/\s+/g,' ')
.replace(/class=\"([^\"]+)\"/g, (_, cls) => `class=\"${cls.split(' ').sort().join(' ')}\"`)
.trim()