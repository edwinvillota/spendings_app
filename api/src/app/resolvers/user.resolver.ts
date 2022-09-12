import { Query, Resolver, Mutation, Arg, Authorized } from "type-graphql";
import { Service } from "typedi";
import { User } from "../entities/user.entity";
import { UserService } from "../services/user.service";
import { UserInput } from "./inputs/user-input";

@Service()
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Authorized()
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Authorized()
  @Query(() => User)
  async getUser(@Arg("id") id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }

  @Authorized()
  @Mutation(() => User)
  async createUser(@Arg("input") input: UserInput) {
    return await this.userService.createUser(input);
  }
}
