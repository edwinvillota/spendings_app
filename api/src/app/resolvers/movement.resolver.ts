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
import { Movement } from "../entities/movement.entity";
import { CategoryService } from "../services/category.service";
import { MovementService } from "../services/movement.service";
import { UserService } from "../services/user.service";
import { MovementInput, MovementUpdateInput } from "./inputs/movement.input";

@Service()
@Resolver(() => Movement)
export class MovementResolver {
  constructor(
    private readonly movementService: MovementService,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService
  ) {}

  @Authorized()
  @Mutation(() => Movement)
  async createMovement(@Arg("input") input: MovementInput) {
    return await this.movementService.createMovement(input);
  }

  @Authorized()
  @Query(() => [Movement])
  async getMovements() {
    return await this.movementService.getMovements();
  }

  @Authorized()
  @Query(() => Movement)
  async getMovementById(@Arg("id") id: number) {
    return await this.movementService.getMovementById(id);
  }

  @Authorized()
  @Mutation(() => Movement)
  async updateMovement(
    @Arg("id") id: number,
    @Arg("input") input: MovementUpdateInput
  ) {
    return await this.movementService.updateMovement(id, input);
  }

  @Authorized()
  @Mutation(() => Movement)
  async deleteMovemnent(@Arg("id") id: number) {
    return await this.movementService.deleteMovement(id);
  }

  @FieldResolver()
  async user(@Root() movement: Movement) {
    return await this.userService.getUserById(movement.userId);
  }

  @FieldResolver()
  async category(@Root() movement: Movement) {
    return await this.categoryService.getCategoryById(movement.categoryId);
  }
}
