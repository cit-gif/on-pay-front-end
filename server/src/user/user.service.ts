import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import getQueryRequest from 'src/helper/getQueryRequest';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './entity/user.entity';
import { UserInterface } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAllUser(
    queryReq: string,
    pageReq: string,
    limitReq: string,
  ): Promise<UserEntity[]> {
    const { query, page, limit, skip } = getQueryRequest(
      queryReq,
      pageReq,
      limitReq,
    );
    if (query === '') {
      return this.userRepository.find({
        order: {
          createdAt: 'ASC',
        },
        skip: skip,
        take: limit,
      });
    } else {
      return this.userRepository.find({
        where: [
          {
            firstName: Like(query),
          },
          {
            lastName: Like(query),
          },
        ],
        order: {
          createdAt: 'ASC',
        },
        skip: skip,
        take: limit,
      });
    }
  }
  async findById(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne(id);
  }
  async findByEmail(email: string): Promise<UserInterface> {
    return await this.userRepository.findOne({ email: email });
  }
  public static privatePassword() {}
}
