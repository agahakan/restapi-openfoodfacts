import { Controller, Get, UseGuards, Patch, Body } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/decorator";
import { JwtGuard } from "src/auth/guard";
import { ApiOperation, ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@ApiBearerAuth('UserToken')
@ApiTags("Users")
@Controller("users")
export class UserController {
  constructor(private userService : UserService) {}
  @Get("me")
  @ApiOperation({ summary: "Get current user information" })
  getMe(@GetUser("id") user: User) {
    return user;
  }

  @Patch()
  @ApiOperation({ summary: "Update current user information" })
  editUser(
    @GetUser('id') userId: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(userId, dto);
  }
}
