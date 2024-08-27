// vite.config.js
import { defineConfig, loadEnv } from "file:///Users/taoran/disk3/www3/avenue/admin/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/taoran/disk3/www3/avenue/admin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import vueJsx from "file:///Users/taoran/disk3/www3/avenue/admin/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/taoran/disk3/www3/avenue/admin";
var vite_config_default = ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const proxyPrefix = env.VITE_APP_PROXY_PREFIX;
  return defineConfig({
    base: env.VITE_APP_BASE,
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src"),
        "@cps": resolve(__vite_injected_original_dirname, "src/components"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      }
    },
    build: {
      chunkSizeWarningLimit: 1500
      // rollupOptions: {
      //   output: {
      //     manualChunks(id) {
      //       if (id.includes('node_modules')) {
      //         return id.toString().split("node_modules/")[1].split("/")[0].toString();
      //       }
      //     }
      //   }
      // }
    },
    server: {
      host: "0.0.0.0",
      port: env.VITE_APP_PORT || process.env.port,
      proxy: {
        [proxyPrefix]: {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          ws: true,
          toProxy: true,
          rewrite: (path) => path.replace(new RegExp(`^${proxyPrefix}`), "")
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdGFvcmFuL2Rpc2szL3d3dzMvYXZlbnVlL2FkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdGFvcmFuL2Rpc2szL3d3dzMvYXZlbnVlL2FkbWluL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90YW9yYW4vZGlzazMvd3d3My9hdmVudWUvYWRtaW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpXG4gIGNvbnN0IHByb3h5UHJlZml4ID0gZW52LlZJVEVfQVBQX1BST1hZX1BSRUZJWFxuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIGJhc2U6IGVudi5WSVRFX0FQUF9CQVNFLFxuICAgIHBsdWdpbnM6IFt2dWUoKSwgdnVlSnN4KCldLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgICAgJ0BjcHMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb25lbnRzJyksXG4gICAgICAgICd2dWUtaTE4bic6ICd2dWUtaTE4bi9kaXN0L3Z1ZS1pMThuLmNqcy5qcycsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBidWlsZDoge1xuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxNTAwLFxuICAgICAgLy8gcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gICBvdXRwdXQ6IHtcbiAgICAgIC8vICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgIC8vICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgIC8vICAgICAgICAgcmV0dXJuIGlkLnRvU3RyaW5nKCkuc3BsaXQoXCJub2RlX21vZHVsZXMvXCIpWzFdLnNwbGl0KFwiL1wiKVswXS50b1N0cmluZygpO1xuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IGVudi5WSVRFX0FQUF9QT1JUIHx8IHByb2Nlc3MuZW52LnBvcnQsXG4gICAgICBwcm94eToge1xuICAgICAgICBbcHJveHlQcmVmaXhdOiB7XG4gICAgICAgICAgdGFyZ2V0OiBlbnYuVklURV9BUFBfQkFTRV9VUkwsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHdzOiB0cnVlLFxuICAgICAgICAgIHRvUHJveHk6IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7cHJveHlQcmVmaXh9YCksICcnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVMsU0FBUyxjQUFjLGVBQWU7QUFDdlUsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFlBQVk7QUFIbkIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzNCLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDdkMsUUFBTSxjQUFjLElBQUk7QUFFeEIsU0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTSxJQUFJO0FBQUEsSUFDVixTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUFBLElBQ3pCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsUUFDN0IsUUFBUSxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLFFBQzNDLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBLElBRUEsT0FBTztBQUFBLE1BQ0wsdUJBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFVekI7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU0sSUFBSSxpQkFBaUIsUUFBUSxJQUFJO0FBQUEsTUFDdkMsT0FBTztBQUFBLFFBQ0wsQ0FBQyxXQUFXLEdBQUc7QUFBQSxVQUNiLFFBQVEsSUFBSTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsSUFBSTtBQUFBLFVBQ0osU0FBUztBQUFBLFVBQ1QsU0FBUyxVQUFRLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxXQUFXLEVBQUUsR0FBRyxFQUFFO0FBQUEsUUFDakU7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
