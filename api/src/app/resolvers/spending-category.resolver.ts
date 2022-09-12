import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { SpendingCategory } from "../entities/spending-category.entity";
import { SpendingCategoryService } from "../services/spending-category.service";
import { SpendingCategoryInput } from "./inputs/spending-category-input";

@Service()
@Resolver(() => SpendingCategory)
export class SpendingCategoryResolver {
  constructor(
    private readonly spendingCategoryService: SpendingCategoryService
  ) {}

  @Authorized()
  @Mutation(() => SpendingCategory)
  async createSpendingCategory(@Arg("input") input: SpendingCategoryInput) {
    return await this.spendingCategoryService.createCategory(input);
  }

  @Authorized()
  @Query(() => [SpendingCategory])
  async getSpendingCategories(): Promise<SpendingCategory[]> {
    return await this.spendingCategoryService.getCategories();
  }

  @Authorized()
  @Query(() => SpendingCategory)
  async getSpendingCategoryById(
    @Arg("id") id: number
  ): Promise<SpendingCategory | null> {
    return await this.spendingCategoryService.getCategoryById(id);
  }

  @Authorized()
  @Mutation(() => SpendingCategory)
  async updateSpendingCategory(
    @Arg("id") id: number,
    @Arg("input") input: SpendingCategoryInput
  ) {
    return await this.spendingCategoryService.updateCategory(id, input);
  }

  @Authorized()
  @Mutation(() => SpendingCategory)
  async deleteSpendingCategory(@Arg("id") id: number) {
    return await this.spendingCategoryService.deleteCategory(id);
  }
}
