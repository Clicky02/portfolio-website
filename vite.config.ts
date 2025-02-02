import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import macrosPlugin from "vite-plugin-babel-macros"

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), macrosPlugin()],
})
