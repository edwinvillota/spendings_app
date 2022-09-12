import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SpendingCategory } from "./spending-category.entity";
import { User } from "./user.entity";

@Entity()
@ObjectType()
export class Spending extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne((type) => User)
  @JoinColumn()
  user!: User;

  @Field(() => Int)
  @Column()
  userId!: number;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => Float)
  @Column()
  value!: number;

  @Field(() => SpendingCategory)
  @OneToOne(() => SpendingCategory)
  @JoinColumn()
  category!: SpendingCategory;

  @Field(() => Int)
  @Column()
  categoryId!: number;

  @Field(() => Date)
  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  @Column({
    nullable: true,
  })
  updatedAt!: Date;
}
