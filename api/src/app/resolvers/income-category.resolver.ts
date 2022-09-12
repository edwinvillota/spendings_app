import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { IncomeCategory } from "../entities/income-category.entity";
import { IncomeCategoryService } from "../services/income-category.service";
import { IncomeCategoryInput } from "./inputs/income-category-input";

@Service()
@Resolver(() => IncomeCategory)
export class IncomeCategoryResolver {
  constructor(private readonly incomeCategoryService: IncomeCategoryService) {}

  @Authorized()
  @Mutation(() => IncomeCategory)
  async createIncomeCategory(@Arg("input") input: IncomeCategoryInput) {
    return await this.incomeCategoryService.createCategory(input);
  }

  @Authorized()
  @Query(() => [IncomeCategory])
  async getIncomeCategories(): Promise<IncomeCategory[]> {
    return await this.incomeCategoryService.getCategories();
  }

  @Authorized()
  @Query(() => IncomeCategory)
  async getIncomeCategoryById(
    @Arg("id") id: number
  ): Promise<IncomeCategory | null> {
    return await this.incomeCategoryService.getCategoryById(id);
  }

  @Authorized()
  @Mutation(() => IncomeCategory)
  async updateIncomeCategory(
    @Arg("id") id: number,
    @Arg("input") input: IncomeCategoryInput
  ) {
    return await this.incomeCategoryService.updateCategory(id, input);
  }

  @Authorized()
  @Mutation(() => IncomeCategory)
  async deleteIncomeCategory(@Arg("id") id: number) {
    return await this.incomeCategoryService.deleteCategory(id);
  }
}
