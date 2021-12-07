import { sqlClient } from "./SQLClient";

export class DBManager {
  async connectDB(): Promise<void> {
    try {
      await sqlClient.init();
    } catch (error) {
      throw new Error("Something wrong on DB connection");
    }
  }

  async closeDB(): Promise<void> {
    try {
      await sqlClient.finish();
    } catch (error) {
      throw new Error("Something wrong on closing DB");
    }
  }
}
