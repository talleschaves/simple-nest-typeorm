import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UsersDto {
    readonly id?: string;

    @IsString({ message: 'Name should be a string' })
    @IsNotEmpty()
    readonly name: string;
    
    @IsEmail()
    readonly email: string;

    @IsString({ message: 'Name should be a string' })
    @MinLength(6)
    readonly password: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;
}
