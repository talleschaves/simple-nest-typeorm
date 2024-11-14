import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private readonly usersRepository: Repository<Users>
    ) { }

    async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async findOne(id: string): Promise<any> {
        return this.usersRepository.findOneBy({
            id
        });
    }

    async createUser(userDTO: UsersDto): Promise<UsersDto> {
        const createdUser = await this.usersRepository.save(userDTO);
        return createdUser;
    }
}
