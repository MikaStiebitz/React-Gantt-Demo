import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: "./", // Makes assets load correctly in different environments
    build: {
        sourcemap: true,
        outDir: "dist",
    },
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            // Ensure this matches your tsconfig paths
            "react-modern-gantt": "/src",
        },
    },
});
