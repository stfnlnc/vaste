import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        tailwindcss(),
        viteCompression()
    ],
    server: {
        host: '0.0.0.0',
        port: 8000
    }
})