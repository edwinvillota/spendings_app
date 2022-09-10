import { Arg, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { User } from "../entities/user.entity";
import { AuthService } from "../services/auth.service";
import { AccessToken } from "../types/access-token";
import { CredentialsInput } from "./inputs/credentials-input";

@Service()
@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AccessToken)
  async login(@Arg("input") input: CredentialsInput) {
    return await this.authService.login(input);
  }
}
