import { Service } from "typedi";
import { User } from "../../schema/user/user.schema";

@Service()
export class UserService {
  private users: User[];

  constructor() {
    this.users = [
      { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
      { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
      { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com" },
    ];
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }
}
