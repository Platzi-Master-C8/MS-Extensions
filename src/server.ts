import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import { DBManager } from "./db/DBManager";

//Routs
const job_vacant = require('./routes/job_vacant');
export class App {
  private host: string | undefined;
  private port: string | undefined;
  DB: DBManager;

  constructor(port: string | undefined) {
    this.port = port || "3000";
    this.host =  "0.0.0.0";
    this.DB = new DBManager();
  }

  async init(): Promise<Server> {
    const server: Server = Hapi.server({
      port: this.port,
      host: this.host,
      routes: {
<<<<<<< HEAD
        cors: true
      }
=======
        cors: true,
      },
>>>>>>> cdeaa10c1e6315da5c011df4fc6a38763bbeca3e
    });
    await this.DB.connectDB();
    server.route(job_vacant);
    return server;
  }

  async start(): Promise<void> {
    let server = await this.init();
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);

    return await server.start();
  }
}
