import { App } from "./server";
import { config } from "./config";

const { SERVER_PORT, SERVER_HOST } = config;

const server: App = new App(SERVER_PORT, SERVER_HOST);

server.start();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
