import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import { ContextType } from "../common/interfaces/context-type";
import { Income } from "../entities/income.entity";
import { IncomeCategoryService } from "../services/income-category.service";
import { IncomeService } from "../services/income.service";
import { UserService } from "../services/user.service";
import { IncomeInput } from "./inputs/income.input";

@Service()
@Resolver(() => Income)
export class IncomeResolver {
  constructor(
    private readonly incomeService: IncomeService,
    private readonly userService: UserService,
    private readonly incomeCategoryService: IncomeCategoryService
  ) {}

  @Authorized()
  @Mutation(() => Income)
  async createIncome(
    @Arg("input") input: IncomeInput,
    @Ctx() context: ContextType
  ) {
    return await this.incomeService.createIncome(context.user.id, input);
  }

  @Authorized()
  @Query(() => [Income])
  async getIncomes(@Ctx() { user }: ContextType) {
    return await this.incomeService.getIncomes(user.id);
  }

  @Authorized()
  @Query(() => Income)
  async getIncomeById(@Arg("id") id: number, @Ctx() { user }: ContextType) {
    return await this.incomeService.getIncomeById(user.id, id);
  }

  @Authorized()
  @Mutation(() => Income)
  async updateIncome(
    @Arg("id") id: number,
    @Arg("input") input: IncomeInput,
    @Ctx() { user }: ContextType
  ) {
    return await this.incomeService.updateIncome(user.id, id, input);
  }

  @Authorized()
  @Mutation(() => Income)
  async deleteIncome(@Arg("id") id: number, @Ctx() { user }: ContextType) {
    return await this.incomeService.deleteIncome(user.id, id);
  }

  @FieldResolver()
  async user(@Root() income: Income) {
    return await this.userService.getUserById(income.userId);
  }

  @FieldResolver()
  async category(@Root() income: Income) {
    return await this.incomeCategoryService.getCategoryById(income.categoryId);
  }
}
