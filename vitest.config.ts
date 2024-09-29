import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 可以避免重複輸入 import '@testing-library/jest-dom'
    environment: 'jsdom', // 用來建立模擬瀏覽器，預設是 node.js
    setupFiles: ['./setupTest.ts'],
  },
})