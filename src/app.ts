import { Server }  from './server';
import { config } from './config'

const { PORT } = config;


const server: Server = new Server( `${PORT}` );

server.start();