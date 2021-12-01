import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
   DB_HOST: process.env.HOST,
   DB_DOMAIN: process.env.DOMAIN,
   DB_USER: process.env.USER,
   DB_PASSWORD: process.env.PASSWORD,
   PORT: process.env.PORT
};
