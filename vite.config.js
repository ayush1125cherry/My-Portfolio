import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
var stdin_default = defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src")
    }
  },
  // File types to support raw imports. Do not add .css or app source files (e.g. .jsx) here.
  assetsInclude: ["**/*.svg", "**/*.csv"]
});
export {
  stdin_default as default
};
