import { buildSchema, ResolverData } from "type-graphql";
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
import { Spending } from "./entities/spending.entity";
import { SpendingResolver } from "./resolvers/spending.resolver";
import { MovementType } from "./entities/movement-type.entity";
import { MovementTypeResolver } from "./resolvers/movement-type.resolver";
import { Category } from "./entities/category.entity";
import { CategoryResolver } from "./resolvers/category.resolver";
import { ContextType } from "./common/interfaces/context-type";
import { MovementResolver } from "./resolvers/movement.resolver";

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
Container.set("spendingRepository", AppDataSource.getRepository(Spending));
Container.set(
  "movementTypeRepository",
  AppDataSource.getRepository(MovementType)
);
Container.set("categoryRepository", AppDataSource.getRepository(Category));

export const schema = buildSchema({
  container: ({ context }: ResolverData<ContextType>) =>
    Container.of(context.requestId),
  resolvers: [
    UsersResolver,
    AuthResolver,
    IncomeCategoryResolver,
    SpendingCategoryResolver,
    IncomeResolver,
    SpendingResolver,
    MovementTypeResolver,
    CategoryResolver,
    MovementResolver,
  ],
  emitSchemaFile: true,
  authChecker: new CustomAuthChecker().check,
});
