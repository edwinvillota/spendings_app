import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { User } from "./user.entity";

@Entity()
@ObjectType()
export class Movement extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => User)
  @ManyToOne(() => User)
  @JoinColumn()
  user!: User;

  @Field(() => Int)
  @Column()
  userId!: number;

  @Field(() => Category)
  @ManyToOne(() => Category)
  @JoinColumn()
  category!: Category;

  @Field(() => Int)
  @Column()
  categoryId!: number;

  @Field(() => Date)
  @Column()
  date!: Date;

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
