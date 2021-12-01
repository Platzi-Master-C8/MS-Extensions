import express from "express";
import cors from "cors";
import helmet from "helmet";

export class Server {

  private express: express.Express;
  private port: string;

  constructor( port: string  ) {
   this.express = express();
   this.port = port || '8080';

   //Middlewares
   this.middlewares();
   //Routes
   this.routes();
  }

  middlewares() {
   //CORS
   this.express.use(cors());
   //read and bodyparser
   this.express.use(express.json());
   //Security
   this.express.use(helmet());
  }

  routes() {};

  start() {
   this.express.listen(this.port, () => {
   console.log("Server runing in port:", this.port);
   });
  }
}