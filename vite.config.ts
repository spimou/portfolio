import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite' 


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
    host: true,          // listen on 0.0.0.0 so Docker can expose it
    watch: {
      usePolling: true,  // detect changes on Windows bind mounts
    },
  },
})
