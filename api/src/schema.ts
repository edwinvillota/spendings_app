import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { User } from "./entities/user.entity";
import { UsersResolver } from "./resolvers/user.resolver";
import { AppDataSource } from "./common/persistence/data-source";

Container.set("userRepository", AppDataSource.getRepository(User));

export const schema = buildSchema({
  resolvers: [UsersResolver],
  emitSchemaFile: true,
  container: Container,
});
