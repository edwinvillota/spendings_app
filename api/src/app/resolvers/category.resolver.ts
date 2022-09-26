import {
  Arg,
  Authorized,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Service } from "typedi";
import { Category } from "../entities/category.entity";
import { CategoryService } from "../services/category.service";
import { CategoryInput, CategoryUpdateInput } from "./inputs/category.input";
import { MovementTypeResolver } from "./movement-type.resolver";

@Service()
@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly movementTypeService: MovementTypeResolver
  ) {}

  @Authorized()
  @Mutation(() => Category)
  async createCategory(@Arg("input") input: CategoryInput) {
    return await this.categoryService.createCategory(input);
  }

  @Authorized()
  @Query(() => [Category])
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Authorized()
  @Query(() => Category)
  async getCategoryById(@Arg("id") id: number) {
    return await this.categoryService.getCategoryById(id);
  }

  @Authorized()
  @Mutation(() => Category)
  async updateCategory(
    @Arg("id") id: number,
    @Arg("input") input: CategoryUpdateInput
  ) {
    return await this.categoryService.updateCategory(id, input);
  }

  @Authorized()
  @Mutation(() => Category)
  async deleteCategory(@Arg("id") id: number) {
    return await this.categoryService.deleteCategory(id);
  }

  @FieldResolver()
  async movementType(@Root() category: Category) {
    return await this.movementTypeService.getMovementTypeById(
      category.movementTypeId
    );
  }
}
