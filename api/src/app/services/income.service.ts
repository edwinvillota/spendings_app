import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { Income } from "../entities/income.entity";
import { IncomeInput } from "../resolvers/inputs/income.input";
import { IncomeCategoryService } from "./income-category.service";

@Service()
export class IncomeService {
  private incomeRepository: Repository<Income>;

  constructor(
    private readonly incomeCategoryService: IncomeCategoryService,
    @Inject("incomeRepository") incomeRepository: Repository<Income>
  ) {
    this.incomeRepository = incomeRepository;
  }

  public async findIncomeById(userId: number, id: number) {
    return this.incomeRepository.findOneBy({ id, userId });
  }

  public async createIncome(userId: number, input: IncomeInput) {
    const category = await this.incomeCategoryService.findCategoryById(
      input.categoryId
    );

    if (!category) {
      throw new ConflictException(
        `Category with id: ${input.categoryId} doesn't exists`
      );
    }

    const income = this.incomeRepository.create({ ...input, userId });
    return this.incomeRepository.save(income);
  }

  public async getIncomes(userId: number) {
    return this.incomeRepository.find({ where: { userId } });
  }

  public async getIncomeById(userId: number, id: number) {
    return this.incomeRepository.findOneBy({ id, userId });
  }

  public async updateIncome(userId: number, id: number, input: IncomeInput) {
    const income = await this.findIncomeById(userId, id);
    if (!income)
      throw new ConflictException(`Income with id: ${id} doesn't exists`);
    const category = await this.incomeCategoryService.findCategoryById(
      input.categoryId
    );
    if (!category)
      throw new ConflictException(
        `Category with id: ${input.categoryId} doesn't exists`
      );
    const updatedAt = new Date();
    await this.incomeRepository.update({ id }, { ...input, updatedAt });
    return this.findIncomeById(userId, id);
  }

  public async deleteIncome(userId: number, id: number) {
    const income = await this.findIncomeById(userId, id);
    if (!income)
      throw new ConflictException(`Income with id: ${id} doesn't exists`);

    return this.incomeRepository.remove(income);
  }
}
