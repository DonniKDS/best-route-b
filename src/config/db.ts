export const db = {
    database: process.env.DB_NAME || 'best-route-b',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 5434,
};
