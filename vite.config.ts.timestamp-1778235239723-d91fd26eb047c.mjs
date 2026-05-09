// vite.config.ts
import { defineConfig } from "file:///Users/phamlam/Documents/Bases/b2b-smiletrip/node_modules/.pnpm/vite@5.4.21_@types+node@24.12.2_lightningcss@1.32.0/node_modules/vite/dist/node/index.js";
import svgr from "file:///Users/phamlam/Documents/Bases/b2b-smiletrip/node_modules/.pnpm/vite-plugin-svgr@5.2.0_rollup@4.60.2_typescript@6.0.3_vite@5.4.21_@types+node@24.12.2_lightningcss@1.32.0_/node_modules/vite-plugin-svgr/dist/index.js";
import tsconfigPaths from "file:///Users/phamlam/Documents/Bases/b2b-smiletrip/node_modules/.pnpm/vite-tsconfig-paths@5.1.4_typescript@6.0.3_vite@5.4.21_@types+node@24.12.2_lightningcss@1.32.0_/node_modules/vite-tsconfig-paths/dist/index.js";
import tailwindcss from "file:///Users/phamlam/Documents/Bases/b2b-smiletrip/node_modules/.pnpm/@tailwindcss+vite@4.2.4_vite@5.4.21_@types+node@24.12.2_lightningcss@1.32.0_/node_modules/@tailwindcss/vite/dist/index.mjs";
import react from "file:///Users/phamlam/Documents/Bases/b2b-smiletrip/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.21_@types+node@24.12.2_lightningcss@1.32.0_/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss(), svgr()],
  server: {
    port: 3e3,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  },
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    env: {
      VITE_API_BASE_URL: "http://localhost:3000/api"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcGhhbWxhbS9Eb2N1bWVudHMvQmFzZXMvYjJiLXNtaWxldHJpcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3BoYW1sYW0vRG9jdW1lbnRzL0Jhc2VzL2IyYi1zbWlsZXRyaXAvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3BoYW1sYW0vRG9jdW1lbnRzL0Jhc2VzL2IyYi1zbWlsZXRyaXAvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3ZncidcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHRzY29uZmlnUGF0aHMoKSwgdGFpbHdpbmRjc3MoKSwgc3ZncigpXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgZW52aXJvbm1lbnQ6ICdub2RlJyxcbiAgICBzZXR1cEZpbGVzOiBbJ3NyYy90ZXN0L3NldHVwLnRzJ10sXG4gICAgaW5jbHVkZTogWydzcmMvKiovKi57dGVzdCxzcGVjfS57dHMsdHN4fSddLFxuICAgIGVudjoge1xuICAgICAgVklURV9BUElfQkFTRV9VUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJyxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFDakIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7QUFBQSxFQUN6RCxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLG1CQUFtQjtBQUFBLElBQ2hDLFNBQVMsQ0FBQywrQkFBK0I7QUFBQSxJQUN6QyxLQUFLO0FBQUEsTUFDSCxtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
