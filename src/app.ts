import { App } from "./server";
import { config } from "./config";

const { SERVER_PORT } = config;

const server: App = new App(SERVER_PORT);

server.start();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
