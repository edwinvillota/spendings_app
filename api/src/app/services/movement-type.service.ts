import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { MovementType } from "../entities/movement-type.entity";
import {
  MovementTypeInput,
  MovementTypeUpdateInput,
} from "../resolvers/inputs/movement-type.input";

@Service()
export class MovementTypeService {
  private movementTypeRepository: Repository<MovementType>;
  constructor(
    @Inject("movementTypeRepository")
    movementTypeRepository: Repository<MovementType>
  ) {
    this.movementTypeRepository = movementTypeRepository;
  }

  public async findMovementTypeById(id: number) {
    return this.movementTypeRepository.findOneBy({ id });
  }

  public async createMovementType(input: MovementTypeInput) {
    try {
      const movementType = this.movementTypeRepository.create(input);
      return this.movementTypeRepository.save(movementType);
    } catch (error) {
      throw error;
    }
  }

  public async getMovementTypes() {
    return this.movementTypeRepository.find();
  }

  public async getMovementTypeById(id: number) {
    const movementType = await this.findMovementTypeById(id);

    if (!movementType)
      throw new ConflictException(`Movement with id: ${id} doesn't exists`);

    return movementType;
  }

  public async updateMovementType(id: number, input: MovementTypeUpdateInput) {
    const movementType = await this.findMovementTypeById(id);

    if (!movementType) {
      throw new ConflictException(`Movement with id: ${id} doesn't exists`);
    }

    const updatedAt = new Date();

    await this.movementTypeRepository.update({ id }, { ...input, updatedAt });
    return this.findMovementTypeById(id);
  }

  public async deleteMovementType(id: number) {
    const movementType = await this.findMovementTypeById(id);

    if (!movementType)
      throw new ConflictException(
        `Movement type with id: ${id} doesn't exists`
      );

    return this.movementTypeRepository.remove(movementType);
  }
}
