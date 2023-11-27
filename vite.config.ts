import dotenv from 'dotenv';
dotenv.config();

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const { PORT = 3000 } = process.env;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: PORT as number,
  },
  define: {
    'process.env': process.env,
  },
});
