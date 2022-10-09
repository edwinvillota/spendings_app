import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE");

  return {
    envDir: "src/env",
    define: {
      __APP_ENV__: env.APP_ENV,
    },
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
  };
});
