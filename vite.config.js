import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "src", // Ganti 'dist' dengan nama direktori yang Anda inginkan
  },
});
