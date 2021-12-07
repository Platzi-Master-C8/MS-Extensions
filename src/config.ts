import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
   DB_NAME: process.env.DB_NAME,
   DB_DOMAIN: process.env.DB_DOMAIN,
   DB_PORT: process.env.DB_PORT || 3306,
   DB_USER: process.env.USER,
   DB_PASSWORD: process.env.PASSWORD,
   PORT: process.env.PORT,
   HOST: process.env.HOST
};
