import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, Max } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    instructor: string;

    @IsNumber()
    @Min(1)
    @Max(10)
    @Type(() => Number)
    credits: number;

    @IsString()
    @IsOptional()
    description?: string;
}