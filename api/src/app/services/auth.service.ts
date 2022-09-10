import { Service } from "typedi";
import { UserService } from "./user.service";
import { sign, verify, decode } from "jsonwebtoken";
import { CredentialsInput } from "../resolvers/inputs/credentials-input";
import { AccessToken } from "../types/access-token";
import { ConflictException } from "../common/exceptions/conflict-exception";
import { compareSync } from "bcrypt";
import { InternalServerException } from "../common/exceptions/internal-server-exception";
import { UnauthorizedException } from "../common/exceptions/unauthorized-exception";
import { JWTPayload } from "../common/interfaces/jwt-payload";
import { User } from "../entities/user.entity";

@Service()
export class AuthService {
  private secretKey: string;

  constructor(private readonly userService: UserService) {
    this.secretKey = process.env.AUTH_SECRET_KEY || "";
  }

  generateToken(uid: number): Promise<AccessToken> {
    return new Promise((resolve, reject) => {
      try {
        const payload = { uid };
        if (!this.secretKey) {
          throw new InternalServerException("Secret key not found");
        }

        sign(
          payload,
          this.secretKey,
          {
            expiresIn: "24h",
          },
          (error, token) => {
            if (error) throw new InternalServerException(error.message);
            if (!token)
              throw new InternalServerException("Token doesn't exists");
            resolve({
              token: `Bearer ${token}`,
            });
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  async verifyToken(token: string): Promise<User> {
    try {
      verify(token, this.secretKey);

      const { uid }: any = decode(token);
      if (!uid) throw new UnauthorizedException();
      const user = await this.userService.getUser(uid);
      if (!user) throw new UnauthorizedException("User doesn't exists");

      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async login({ email, password }: CredentialsInput): Promise<AccessToken> {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new ConflictException("Wrong email or password");
    }

    const passwordIsValid = compareSync(password, user.password);

    if (!passwordIsValid) {
      throw new ConflictException("Wrong email or password");
    }

    const token = await this.generateToken(user.id);

    return token;
  }
}
