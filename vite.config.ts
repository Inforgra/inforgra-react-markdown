import { defineConfig } from 'vite';
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "inforgra-marked-react",
      formats: ["es", "cjs", "umd"],
      fileName: "index",
    },
    rollupOptions: {
      external: []
    },
  }
})
