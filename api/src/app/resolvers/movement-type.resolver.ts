import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { MovementType } from "../entities/movement-type.entity";
import { MovementTypeService } from "../services/movement-type.service";
import { MovementTypeInput } from "./inputs/movement-type.input";

@Service()
@Resolver(() => MovementType)
export class MovementTypeResolver {
  constructor(private readonly movementTypeService: MovementTypeService) {}

  @Authorized()
  @Mutation(() => MovementType)
  async createMovementType(@Arg("input") input: MovementTypeInput) {
    return await this.movementTypeService.createMovementType(input);
  }

  @Authorized()
  @Query(() => [MovementType])
  async getMovementTypes() {
    return await this.movementTypeService.getMovementTypes();
  }

  @Authorized()
  @Query(() => MovementType)
  async getMovementTypeById(@Arg("id") id: number) {
    return await this.movementTypeService.getMovementTypeById(id);
  }

  @Authorized()
  @Mutation(() => MovementType)
  async updateMovementType(
    @Arg("id") id: number,
    @Arg("input") input: MovementTypeInput
  ) {
    return await this.movementTypeService.updateMovementType(id, input);
  }

  @Authorized()
  @Mutation(() => MovementType)
  async deleteMovementType(@Arg("id") id: number) {
    return await this.movementTypeService.deleteMovementType(id);
  }
}
