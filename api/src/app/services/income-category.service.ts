import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { IncomeCategory } from "../entities/income-category.entity";
import { IncomeCategoryInput } from "../resolvers/inputs/income-category-input";

@Service()
export class IncomeCategoryService {
  private incomeCategoryRepository: Repository<IncomeCategory>;

  constructor(
    @Inject("incomeCategoryRepository")
    incomeCategoryRepository: Repository<IncomeCategory>
  ) {
    this.incomeCategoryRepository = incomeCategoryRepository;
  }

  public findCategoryById(id: number) {
    return this.incomeCategoryRepository.findOneBy({ id });
  }

  public async createCategory(category: IncomeCategoryInput) {
    return this.incomeCategoryRepository.save(category);
  }

  public async getCategories() {
    return this.incomeCategoryRepository.find();
  }

  public async getCategoryById(id: number) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    return category;
  }

  public async updateCategory(id: number, input: IncomeCategoryInput) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    const updatedAt = new Date();

    await this.incomeCategoryRepository.update({ id }, { ...input, updatedAt });

    return this.incomeCategoryRepository.findOneBy({ id });
  }

  public async deleteCategory(id: number) {
    const category = await this.findCategoryById(id);

    if (!category)
      throw new ConflictException(`Category with id: ${id} doesn't exists`);

    return this.incomeCategoryRepository.remove(category);
  }
}
