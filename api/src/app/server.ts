import express, { Application } from "express";
import { schema } from "./schema";
import cors from "cors";
import { AppDataSource } from "./common/persistence/data-source";
import { ApolloServer } from "apollo-server";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  GraphQLRequestContext,
} from "apollo-server-core";
import { Container } from "typedi";
import { ContextType } from "./common/interfaces/context-type";
import { AuthService } from "./services/auth.service";
import { getContext } from "./common/utils/getContext";
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
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
        {
          requestDidStart: async () => ({
            willSendResponse: async (requestContext) => {
              Container.reset(requestContext.context.requestId);
            },
          }),
        },
      ],
      context: getContext,
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
