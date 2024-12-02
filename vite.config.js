import { defineConfig } from "vite";
import { resolve } from "path";

const env = process.env.NODE_ENV;

export default defineConfig({
    build: {
        outDir: "docs",
    },
    server: {
        host: "localhost",
        port: 3000,
        cors: true,
    },
    css: {
        devSourcemap: true,
        modules: {
            generateScopedName: env === "development" ? "[local]__[hash:base64:1]" : "[local]__[hash:base64:12]",
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
