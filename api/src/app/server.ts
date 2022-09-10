import express, { Application } from "express";
import { schema } from "./schema";
import cors from "cors";
import { AppDataSource } from "./common/persistence/data-source";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

export class Server {
  private app: Application;
  private port: Number;

  constructor() {
    this.app = express();
    this.port = 3000;

    this.middlewares();
    this.database();
    this.graphql();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async graphql() {
    const server = new ApolloServer({
      schema: await schema,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      context: ({ req }) => {
        return { req };
      },
    });

    const { url } = await server.listen();
    console.log(`GraphQL running on ${url}`);
  }

  async database() {
    try {
      await AppDataSource.initialize();
      console.log("Database connected");
    } catch (error) {
      console.log("Error connecting with database", error);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`API Running on port ${this.port}`);
    });
  }
}
