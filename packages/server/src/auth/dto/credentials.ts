import { ApiProperty } from '@nestjs/swagger';
import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
@InputType()
export class Credentials {
  @ApiProperty({
    required: true,
    type: String,
  })
  @MinLength(5)
  @MaxLength(48)
  @Field(() => String, { nullable: false })
  username: string;
  @ApiProperty({
    required: true,
    type: String,
  })
  @MinLength(5)
  @MaxLength(48)
  @Field(() => String, { nullable: false })
  password: string;
  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  captcha?: string;
}
