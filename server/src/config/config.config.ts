import { registerAs } from '@nestjs/config';
import pkg = require('../../package.json');

export const configuration = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  app: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    host: process.env.APP_HOST,
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    databaseName: process.env.DB_NAME,
  },
  passport: {},
};
