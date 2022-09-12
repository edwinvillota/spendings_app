import { Field, Float, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from "typeorm";
import { IncomeCategory } from "./income-category.entity";
import { User } from "./user.entity";

@Entity()
@ObjectType()
export class Income extends BaseEntity {
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

  @Field(() => IncomeCategory)
  @OneToOne(() => IncomeCategory)
  @JoinColumn()
  category!: IncomeCategory;

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
