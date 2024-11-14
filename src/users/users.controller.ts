import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UsersDto } from './users.dto';
import { NotFoundError } from 'rxjs';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(@Res() response: Response) {
        const users = await this.usersService.findAll();
        if(users.length === 0) {
            throw new HttpException('Users not found!', HttpStatus.NOT_FOUND);
        }
        return response.status(200).json(users);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Res() response: Response) {
        const user = await this.usersService.findOne(id);
        if(!user) {
            throw new HttpException('Users not found!', HttpStatus.NOT_FOUND);
        }
        return response.status(200).json(user);
    }

    @Post()
    async createUser(@Res() response: Response, @Body() user: UsersDto) {
        const userCreated = await this.usersService.createUser(user);
        return response.status(201).json(userCreated);
    }
}
