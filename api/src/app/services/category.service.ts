import { Ctx } from "type-graphql";
import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { ContextType } from "../common/interfaces/context-type";
import { Category } from "../entities/category.entity";
import {
  CategoryInput,
  CategoryUpdateInput,
} from "../resolvers/inputs/category.input";

@Service()
export class CategoryService {
  private categoryRepository: Repository<Category>;
  private context: ContextType;

  constructor(
    @Inject("categoryRepository")
    categoryRepository: Repository<Category>,
    @Inject("context")
    context: ContextType
  ) {
    this.categoryRepository = categoryRepository;
    this.context = context;
  }

  private findCategoryById(id: number) {
    return this.categoryRepository.findOneBy({
      id,
      userId: this.context.user.id,
    });
  }

  public async createCategory(input: CategoryInput) {
    const category = this.categoryRepository.create({
      ...input,
      userId: this.context.user.id,
    });
    return this.categoryRepository.save(category);
  }

  public async getCategories() {
    return this.categoryRepository.find({
      where: { userId: this.context.user.id },
    });
  }

  public async getCategoryById(id: number) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    return category;
  }

  public async updateCategory(id: number, input: CategoryUpdateInput) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    const updatedAt = new Date();
    await this.categoryRepository.update({ id }, { ...input, updatedAt });
    return this.findCategoryById(id);
  }

  public async deleteCategory(id: number) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    return this.categoryRepository.remove(category);
  }
}
