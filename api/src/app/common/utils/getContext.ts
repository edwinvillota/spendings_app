import { ExpressContext } from "apollo-server-express";
import Container, { ContainerInstance } from "typedi";
import { Category } from "../../entities/category.entity";
import { IncomeCategory } from "../../entities/income-category.entity";
import { Income } from "../../entities/income.entity";
import { MovementType } from "../../entities/movement-type.entity";
import { Movement } from "../../entities/movement.entity";
import { SpendingCategory } from "../../entities/spending-category.entity";
import { Spending } from "../../entities/spending.entity";
import { User } from "../../entities/user.entity";
import { AuthService } from "../../services/auth.service";
import { ContextType } from "../interfaces/context-type";
import { AppDataSource } from "../persistence/data-source";

const injectRepositories = (container: ContainerInstance) => {
  container.set("userRepository", AppDataSource.getRepository(User));
  container.set(
    "incomeCategoryRepository",
    AppDataSource.getRepository(IncomeCategory)
  );
  container.set(
    "spendingCategoryRepository",
    AppDataSource.getRepository(SpendingCategory)
  );
  container.set("incomeRepository", AppDataSource.getRepository(Income));
  container.set("spendingRepository", AppDataSource.getRepository(Spending));
  container.set(
    "movementTypeRepository",
    AppDataSource.getRepository(MovementType)
  );
  container.set("categoryRepository", AppDataSource.getRepository(Category));
  container.set("movementRepository", AppDataSource.getRepository(Movement));
};

export const getContext = async ({ req }: ExpressContext) => {
  const requestId = String(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
  const container = Container.of(requestId);

  const context = { req, requestId, container } as ContextType;
  const authService = Container.get<AuthService>(AuthService);
  const authorizationHeader = context.req.headers.authorization || "";
  const [_bearer, token] = authorizationHeader.split(" ");

  injectRepositories(container);

  try {
    if (!token) return context;
    const authenticatedUser = await authService.verifyToken(token.trim());

    if (authenticatedUser) {
      context.user = authenticatedUser;
    }

    container.set("context", context);
    return context;
  } catch (error) {
    container.set("context", context);
    return context;
  }
};
