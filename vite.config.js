import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mission-improbable/", // IMPORTANT: Replace 'date-meme' with your GitHub repository name
});
