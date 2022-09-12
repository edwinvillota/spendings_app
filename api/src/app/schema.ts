import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { User } from "./entities/user.entity";
import { UsersResolver } from "./resolvers/user.resolver";
import { AppDataSource } from "./common/persistence/data-source";
import { AuthResolver } from "./resolvers/auth.resolver";
import { CustomAuthChecker } from "./common/clases/custom-auth-checker";
import { IncomeCategoryResolver } from "./resolvers/income-category.resolver";
import { IncomeCategory } from "./entities/income-category.entity";
import { SpendingCategory } from "./entities/spending-category.entity";
import { SpendingCategoryResolver } from "./resolvers/spending-category.resolver";
import { Income } from "./entities/income.entity";
import { IncomeResolver } from "./resolvers/income.resolver";

Container.set("userRepository", AppDataSource.getRepository(User));
Container.set(
  "incomeCategoryRepository",
  AppDataSource.getRepository(IncomeCategory)
);
Container.set(
  "spendingCategoryRepository",
  AppDataSource.getRepository(SpendingCategory)
);
Container.set("incomeRepository", AppDataSource.getRepository(Income));

export const schema = buildSchema({
  resolvers: [
    UsersResolver,
    AuthResolver,
    IncomeCategoryResolver,
    SpendingCategoryResolver,
    IncomeResolver,
  ],
  emitSchemaFile: true,
  container: Container,
  authChecker: new CustomAuthChecker().check,
});
