import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Service } from "typedi";
import { User } from "../entities/user.entity";
import { UserService } from "../services/user.service";

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
}
