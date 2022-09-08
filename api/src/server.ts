import express, { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";

export class Server {
  private app: Application;
  private port: Number;

  constructor() {
    this.app = express();
    this.port = 3000;

    this.middlewares();
    this.graphql();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async graphql() {
    this.app.use(
      "/graphql",
      graphqlHTTP({
        schema: await schema,
        graphiql: true,
      })
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`API Running on port ${this.port}`);
    });
  }
}
