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
import { Spending } from "../entities/spending.entity";
import { SpendingCategoryService } from "../services/spending-category.service";
import { SpendingService } from "../services/spending.service";
import { UserService } from "../services/user.service";
import { SpendingInput } from "./inputs/spending.input";

@Service()
@Resolver(() => Spending)
export class SpendingResolver {
  constructor(
    private readonly spendingService: SpendingService,
    private readonly userService: UserService,
    private readonly spendingCategoryService: SpendingCategoryService
  ) {}

  @Authorized()
  @Mutation(() => Spending)
  async createSpending(
    @Arg("input") input: SpendingInput,
    @Ctx() context: ContextType
  ) {
    return await this.spendingService.createSpending(context.user.id, input);
  }

  @Authorized()
  @Query(() => [Spending])
  async getSpendings(@Ctx() { user }: ContextType) {
    return await this.spendingService.getSpendings(user.id);
  }

  @Authorized()
  @Query(() => Spending)
  async getSpendingById(@Arg("id") id: number, @Ctx() { user }: ContextType) {
    return await this.spendingService.getSpendingById(user.id, id);
  }

  @Authorized()
  @Mutation(() => Spending)
  async updateSpending(
    @Arg("id") id: number,
    @Arg("input") input: SpendingInput,
    @Ctx() { user }: ContextType
  ) {
    return await this.spendingService.updateSpending(user.id, id, input);
  }

  @Authorized()
  @Mutation(() => Spending)
  async deleteSpending(@Arg("id") id: number, @Ctx() { user }: ContextType) {
    return await this.spendingService.deleteSpending(user.id, id);
  }

  @FieldResolver()
  async user(@Root() spending: Spending) {
    return await this.userService.getUserById(spending.userId);
  }

  @FieldResolver()
  async category(@Root() spending: Spending) {
    return await this.spendingCategoryService.getCategoryById(
      spending.categoryId
    );
  }
}
