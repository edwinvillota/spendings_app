import { buildSchema } from "type-graphql";
import { UsersResolver } from "./schema/user/user.resolver";
import { Container } from "typedi";

export const schema = buildSchema({
  resolvers: [UsersResolver],
  emitSchemaFile: true,
  container: Container,
});
