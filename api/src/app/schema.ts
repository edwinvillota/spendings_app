import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { User } from "./entities/user.entity";
import { UsersResolver } from "./resolvers/user.resolver";
import { AppDataSource } from "./common/persistence/data-source";
import { authChecker } from "./common/middlewares/auth-checker";
import { AuthResolver } from "./resolvers/auth.resolver";
import { CustomAuthChecker } from "./common/clases/custom-auth-checker";

Container.set("userRepository", AppDataSource.getRepository(User));

export const schema = buildSchema({
  resolvers: [UsersResolver, AuthResolver],
  emitSchemaFile: true,
  container: Container,
  authChecker: new CustomAuthChecker().check,
});
