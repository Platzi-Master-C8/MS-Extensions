import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
   DB_NAME: process.env.DB_NAME,
   DB_DOMAIN: process.env.DB_DOMAIN,
   DB_PORT: 5432,
   DB_USER: process.env.DB_USER,
   DB_PASSWORD: process.env.DB_PASSWORD,
   SERVER_PORT: process.env.SERVER_PORT,
   SERVER_HOST: process.env.SERVER_HOST
};
