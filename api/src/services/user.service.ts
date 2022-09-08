import { Inject, Service } from "typedi";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";

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
}
