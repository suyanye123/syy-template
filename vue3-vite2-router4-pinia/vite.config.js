import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    plugins: [vue()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: `@import '@/styles/variables.scss';`,
        },
      },
    },
    server: {
      port: 8077,
      open: true, // 自动打开
      base: "./",
      proxy: {
        // "/app/api": {
        //   target: "https://dev.ylzpay.com/api/follow-up/app/api",
        //   changeOrigin: true, // 打开代理
        //   rewrite: path => path.replace("/app/api", ""),
        // },
      },
    },
  };
});
