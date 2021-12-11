import { Sequelize } from "sequelize";
import { SQLConfig } from "./SQLConfig";
import { SQLClientConfig } from "./SQLClientConfig";
import { ClientFactory } from "./SQLClientFactory";
import { registerModels } from "../models/index";

export class SQLClient implements ClientFactory<Sequelize> {
  private client: Sequelize;

  constructor(config: SQLConfig) {
    this.client = new Sequelize(config);
  }

  async init(): Promise<Sequelize> {
    try {
      await this.client
        .authenticate()
        .then(() => console.log("DB connection Open"));
      registerModels(this.client);
      return this.client.sync();
    } catch (error) {
      console.log(error);
      throw new Error("Error in SQL DB");
    }
  }

  async openDB(): Promise<void> {
    try {
      // console.log(await this.client.authenticate())
      return await this.client.authenticate({
        logging: false
      })
      .then(() => console.log('DB open'))
    } catch (error) {
      throw new Error('Error opening DB')
    }
  }

  async finish(): Promise<void> {
    try {
      await this.client.close().then(() => console.log("DB connection closed"));
    } catch (error) {
      throw new Error("Error closing DB connectiong");
    }
  }
}

export const sqlClient = new SQLClient(SQLClientConfig.createConfig());
