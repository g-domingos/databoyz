import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://g-domingos.github.io/databoyz",
  build: {
    outDir: "build",
  },
});
