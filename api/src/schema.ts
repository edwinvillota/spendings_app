import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { User } from "./entities/user.entity";
import { UsersResolver } from "./resolvers/user.resolver";
import { AppDataSource } from "./common/persistence/data-source";
import { authChecker } from "./common/middlewares/auth-checker";
import { AuthService } from "./services/auth.service";

Container.set("userRepository", AppDataSource.getRepository(User));
Container.set("authService", AuthService);

export const schema = buildSchema({
  resolvers: [UsersResolver],
  emitSchemaFile: true,
  container: Container,
  authChecker,
});
