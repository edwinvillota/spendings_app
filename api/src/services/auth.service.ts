import { Service } from "typedi";
import { UserService } from "./user.service";

@Service()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateToken() {
    return "Token is valid";
  }
}
