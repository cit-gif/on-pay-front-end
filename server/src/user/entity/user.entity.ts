import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, MinLength, MaxLength } from 'class-validator';
import {
  UserEnumGenderOption,
  UserEnumStatusOption,
  userEntityConfig,
} from '../config/user.config';
import argon2 from 'argon2';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(userEntityConfig.firstName.minLength)
  @MaxLength(userEntityConfig.firstName.maxLength)
  firstName: string;

  @Column()
  @MinLength(userEntityConfig.lastName.minLength)
  @MaxLength(userEntityConfig.lastName.maxLength)
  lastName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserEnumGenderOption,
    default: UserEnumGenderOption.MALE,
  })
  gender: UserEnumGenderOption;

  @Column({
    type: 'enum',
    enum: UserEnumStatusOption,
    default: UserEnumStatusOption.ACTIVE,
  })
  status: UserEnumStatusOption;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hasPassword() {
    try {
      this.password = await argon2.hash(this.password);
    } catch (error) {
      this.password = await argon2.hash(this.password);
    }
  }
}
