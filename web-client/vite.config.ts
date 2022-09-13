import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@atoms",
        replacement: path.resolve(__dirname, "src/components/atoms"),
      },
      {
        find: "@molecules",
        replacement: path.resolve(__dirname, "src/components/molecules"),
      },
      {
        find: "@organisms",
        replacement: path.resolve(__dirname, "src/components/organisms"),
      },
      {
        find: "@templates",
        replacement: path.resolve(__dirname, "src/components/templates"),
      },
    ],
  },
  plugins: [react()],
});
