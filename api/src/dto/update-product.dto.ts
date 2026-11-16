import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category?: string;

  constructor(
    name?: string,
    price?: number,
    description?: string,
    category?: string,
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
  }
}