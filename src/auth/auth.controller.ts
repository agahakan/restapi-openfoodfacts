import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { ApiTags, ApiOperation, ApiOkResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiForbiddenResponse } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "Signup a new user" })
  @ApiCreatedResponse({ description: "User has been successfully created." })
  @ApiBadRequestResponse({ description: "Bad request." })
  @Post("signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @ApiOperation({ summary: "Signin an existing user" })
  @ApiOkResponse({ description: "User has been successfully signed in." })
  @ApiBadRequestResponse({ description: "Bad request." })
  @ApiForbiddenResponse({ description: "Credentials Incorrect." })
  @HttpCode(HttpStatus.OK)
  @Post("signin")
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
