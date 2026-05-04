import { createApp } from '../src/infrastructure/server/app.js';

// Vercel serverless functions require the exported Express app
const app = createApp();

export default app;
