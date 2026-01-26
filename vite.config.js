import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_TARGET === "gh" ? "/Tanisha-Makeup-Artist/" : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
