import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: '11111111'})
    phoneNumber: string;

    @ApiProperty({example: '22222'})
    password: string;

    @ApiProperty({example: 'aa@qq.com'})
    email: string;
}
