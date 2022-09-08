import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Service } from "typedi";
import { UserService } from "../../services/user/user.service";
import { UserInput, User } from "./user.schema";

@Service()
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Query(() => User)
  async getUser(@Arg("id") id: number): Promise<User | undefined> {
    return this.userService.getUser(id);
  }
}
