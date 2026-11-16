import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class Product {
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  constructor(
    id: string,
    name: string,
    price: number,
    description: string,
    category: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
  }

  static create(
    name: string,
    price: number,
    description: string,
    category: string,
  ): Product {
    return new Product('', name, price, description, category);
  }

  update(
    name?: string,
    price?: number,
    description?: string,
    category?: string,
  ): Product {
    return new Product(
      this.id,
      name ?? this.name,
      price ?? this.price,
      description ?? this.description,
      category ?? this.category,
    );
  }
}