import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate'
    })],
    resolve: {
        alias: {
            '@src': '/src',
            '@components': '/src/components',
            '@pages': '/src/pages',
            '@assets': '/src/assets',
            '@theme': '/src/theme',
            '@lib': '/src/lib',
            '@context': '/src/context'
        }
    }
})
