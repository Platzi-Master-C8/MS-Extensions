import { App } from "./server";
import { config } from "./config";

const { PORT, HOST } = config;

const server: App = new App(PORT, HOST);

server.start();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
