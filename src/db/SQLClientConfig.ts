import { SQLConfig } from "./SQLConfig";
import { config } from "../config";

export class SQLClientConfig {
  static createConfig(): SQLConfig {
    return {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      dialect: "postgres",
      host: `${config.DB_DOMAIN}`,
      port: config.DB_PORT,
      username: `${config.DB_USER}`,
      password: `${config.DB_PASSWORD}`,
      database: `${config.DB_NAME}`,
    };
  };
}
