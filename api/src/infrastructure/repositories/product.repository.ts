import { Injectable } from '@nestjs/common';
import { DynamoConfig } from '../../config/dynamo.config';
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { Product } from '../../domain/product.entity';

@Injectable()
export class ProductRepository {
  private readonly docClient: DynamoDBDocumentClient;
  private readonly tableName: string;

  constructor(private readonly dynamoConfig: DynamoConfig) {
    this.docClient = dynamoConfig.getDocClient();
    this.tableName = dynamoConfig.getTableName();
  }

  async create(product: Product): Promise<Product> {
    // TODO(reto): Implementar creación de producto en DynamoDB
    // Usar PutCommand con el cliente de DynamoDB
    // Retornar el producto creado con su ID
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Product[]> {
    // TODO(reto): Implementar obtención de todos los productos en DynamoDB
    // Usar ScanCommand para obtener todos los items
    // Retornar array de productos
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar obtención de producto por ID en DynamoDB
    // Usar GetCommand con la clave primaria
    // Retornar el producto o null si no existe
    throw new Error('Method not implemented');
  }

  async update(id: string, product: Product): Promise<Product> {
    // TODO(reto): Implementar actualización de producto en DynamoDB
    // Usar UpdateCommand para actualizar los campos
    // Retornar el producto actualizado
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar eliminación de producto en DynamoDB
    // Usar DeleteCommand con la clave primaria
    // No retornar nada
    throw new Error('Method not implemented');
  }
}