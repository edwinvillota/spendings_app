import * as dotenv from "dotenv";
import "reflect-metadata";
dotenv.config();
import { Server } from "./server";

const server = new Server();

server.listen();
