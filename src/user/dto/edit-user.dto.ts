import { IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class EditUserDto {

  @ApiProperty({
    example: "NewCoco",
  })
  @IsString()
  @IsOptional()
  username?: string;
}
