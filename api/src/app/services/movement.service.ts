import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { ContextType } from "../common/interfaces/context-type";
import { Movement } from "../entities/movement.entity";
import {
  MovementInput,
  MovementUpdateInput,
} from "../resolvers/inputs/movement.input";
import { CategoryService } from "./category.service";

@Service()
export class MovementService {
  private movementRepository: Repository<Movement>;
  private context: ContextType;

  constructor(
    @Inject("movementRepository")
    movementRepository: Repository<Movement>,
    @Inject("context")
    context: ContextType,
    private readonly categoryService: CategoryService
  ) {
    this.movementRepository = movementRepository;
    this.context = context;
  }

  private findMovementById(id: number) {
    return this.movementRepository.findOneBy({
      id,
      userId: this.context.user.id,
    });
  }

  public async createMovement(input: MovementInput) {
    await this.categoryService.getCategoryById(input.categoryId);

    const movement = this.movementRepository.create({
      ...input,
      userId: this.context.user.id,
    });

    return this.movementRepository.save(movement);
  }

  public async getMovements() {
    return this.movementRepository.find({
      where: { userId: this.context.user.id },
    });
  }

  public async getMovementById(id: number) {
    const movement = await this.findMovementById(id);

    if (!movement)
      throw new ConflictException(`Movement with id: ${id} doesn't exists`);

    return movement;
  }

  public async updateMovement(id: number, input: MovementUpdateInput) {
    await this.getMovementById(id);

    const updatedAt = new Date();
    await this.movementRepository.update({ id }, { ...input, updatedAt });

    return this.findMovementById(id);
  }

  public async deleteMovement(id: number) {
    const movement = await this.getMovementById(id);
    return this.movementRepository.remove(movement);
  }
}
