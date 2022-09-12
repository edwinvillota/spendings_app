import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { Spending } from "../entities/spending.entity";
import { SpendingInput } from "../resolvers/inputs/spending.input";
import { SpendingCategoryService } from "./spending-category.service";

@Service()
export class SpendingService {
  private spendingRepository: Repository<Spending>;

  constructor(
    private readonly spendingCategoryService: SpendingCategoryService,
    @Inject("spendingRepository") spendingRepository: Repository<Spending>
  ) {
    this.spendingRepository = spendingRepository;
  }

  public async findSpendingById(userId: number, id: number) {
    return this.spendingRepository.findOneBy({ id, userId });
  }

  public async createSpending(userId: number, input: SpendingInput) {
    const category = await this.spendingCategoryService.findCategoryById(
      input.categoryId
    );

    if (!category) {
      throw new ConflictException(
        `Category with id: ${input.categoryId} doesn't exists`
      );
    }

    const spending = this.spendingRepository.create({ ...input, userId });
    return this.spendingRepository.save(spending);
  }

  public async getSpendings(userId: number) {
    return this.spendingRepository.find({ where: { userId } });
  }

  public async getSpendingById(userId: number, id: number) {
    return this.spendingRepository.findOneBy({ id, userId });
  }

  public async updateSpending(
    userId: number,
    id: number,
    input: SpendingInput
  ) {
    const spending = await this.findSpendingById(userId, id);
    if (!spending)
      throw new ConflictException(`Spending with id: ${id} doesn't exists`);
    const category = await this.spendingCategoryService.findCategoryById(
      input.categoryId
    );
    if (!category)
      throw new ConflictException(
        `Category with id: ${input.categoryId} doesn't exists`
      );
    const updatedAt = new Date();
    await this.spendingRepository.update({ id }, { ...input, updatedAt });
    return this.findSpendingById(userId, id);
  }

  public async deleteSpending(userId: number, id: number) {
    const spending = await this.findSpendingById(userId, id);
    if (!spending)
      throw new ConflictException(`Spending with id: ${id} doesn't exists`);

    return this.spendingRepository.remove(spending);
  }
}
