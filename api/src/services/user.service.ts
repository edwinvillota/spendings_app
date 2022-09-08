import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { UserInput } from "../resolvers/inputs/user-input";

@Service()
export class UserService {
  private userRepository: Repository<User>;

  constructor(@Inject("userRepository") userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUser(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async createUser(user: UserInput) {
    return this.userRepository.save(user);
  }
}
