import { Controller, Get, UseGuards, Patch } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/decorator";
import { JwtGuard } from "src/auth/guard";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@UseGuards(JwtGuard)
@ApiTags("Users")
@Controller("users")
export class UserController {
  @Get("me")
  @ApiOperation({ summary: "Get current user information" })
  getMe(@GetUser("id") user: User) {
    return user;
  }

  @Patch()
  // @ApiOperation({ summary: "Update current user information" })
  editUser() {}
}
