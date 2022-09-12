import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { SpendingCategory } from "../entities/spending-category.entity";
import { SpendingCategoryInput } from "../resolvers/inputs/spending-category-input";

@Service()
export class SpendingCategoryService {
  private spendingCategoryRepository: Repository<SpendingCategory>;

  constructor(
    @Inject("spendingCategoryRepository")
    spendingCategoryRepository: Repository<SpendingCategory>
  ) {
    this.spendingCategoryRepository = spendingCategoryRepository;
  }

  private findCategoryById(id: number) {
    return this.spendingCategoryRepository.findOneBy({ id });
  }

  public async createCategory(category: SpendingCategoryInput) {
    return this.spendingCategoryRepository.save(category);
  }

  public async getCategories() {
    return this.spendingCategoryRepository.find();
  }

  public async getCategoryById(id: number) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    return category;
  }

  public async updateCategory(id: number, input: SpendingCategoryInput) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    const updatedAt = new Date();

    await this.spendingCategoryRepository.update(
      { id },
      { ...input, updatedAt }
    );

    return this.spendingCategoryRepository.findOneBy({ id });
  }

  public async deleteCategory(id: number) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    return this.spendingCategoryRepository.remove(category);
  }
}
