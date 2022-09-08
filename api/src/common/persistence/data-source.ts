import { DataSource } from "typeorm";
import { User } from "../../entities/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [`${__dirname}/../../entities/**/*.entity.ts`],
  subscribers: [],
  migrations: [],
});
