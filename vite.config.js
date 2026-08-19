import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Bind every interface, not just IPv6 [::1]. Vite's default resolves to
    // ::1 only, so Chrome — which sends localhost to 127.0.0.1 — gets
    // ERR_CONNECTION_REFUSED while curl and other clients connect fine.
    host: true,
    proxy: {
      '/api': 'http://localhost:8001'
    }
  }
})
