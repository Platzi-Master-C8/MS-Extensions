import { SQLConfig } from "./SQLConfig";
import { config } from "../config";

export class SQLClientConfig {
  static createConfig(): SQLConfig {
    return {
      dialect: 'mysql',
      host: `${config.DB_DOMAIN}`,
      port: 3306,
      username: `${config.DB_USER}`,
      password: `${config.DB_PASSWORD}`,
      database: `${config.DB_NAME}`,
      ssl: true
    };
  }
}
