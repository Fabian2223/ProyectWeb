import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/runtime/index.ts'),
      name: 'LegoRuntime',
      fileName: 'lego-runtime',
      formats: ['es','umd'],
    },
    outDir: 'dist-runtime',
    emptyOutDir: true,
  },
});
