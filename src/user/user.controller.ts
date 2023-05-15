import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('用户管理')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // POST: /users
    @Post()
    @ApiOperation({
      summary: '新增用户'
    })
    // @ApiBearerAuth()
    @ApiResponse({
      status: HttpStatus.CREATED,
      type: CreateUserDto
    })
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }

    // GET: localhost:3000/user
    // GET: /users
    @Get()
    findAll() {
      return this.userService.findAll();
    }

    // GET: /users/123
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.userService.findOne(+id);
    }

    // PATCH: /users/123
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.userService.update(+id, updateUserDto);
    }

    // DELETE: /users/123
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.userService.remove(+id);
    }
}
