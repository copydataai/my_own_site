import { inject } from '@vercel/analytics';

const mode = import.meta.env.MODE as 'development' | 'production';

inject({ mode });
