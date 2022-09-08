import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Service } from "typedi";
import { User } from "../entities/user.entity";
import { UserService } from "../services/user.service";
import { UserInput } from "./inputs/user-input";

@Service()
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Query(() => User)
  async getUser(@Arg("id") id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }

  @Mutation(() => User)
  async createUser(@Arg("input") input: UserInput) {
    console.log("Mutation ");
    return await this.userService.createUser(input);
  }
}
