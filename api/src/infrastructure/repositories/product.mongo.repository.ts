import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, Collection } from 'mongoose';
import { Product } from '../../domain/product.entity';

@Injectable()
export class ProductMongoRepository implements OnModuleInit {
  private collection: Collection;

  constructor(@InjectConnection() private readonly connection: Connection) {}

  onModuleInit() {
    this.collection = this.connection.collection('products');
  }

  async create(product: Product): Promise<Product> {
    // TODO(reto): Implementar creación de producto en MongoDB
    // Insertar el documento en la colección
    // Retornar el producto creado con su ID generado
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Product[]> {
    // TODO(reto): Implementar obtención de todos los productos en MongoDB
    // Usar find() sin filtros para obtener todos los documentos
    // Retornar array de productos
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar obtención de producto por ID en MongoDB
    // Usar findOne() con el filtro de ID
    // Retornar el producto o null si no existe
    throw new Error('Method not implemented');
  }

  async update(id: string, product: Product): Promise<Product> {
    // TODO(reto): Implementar actualización de producto en MongoDB
    // Usar findOneAndUpdate() para actualizar y retornar el documento
    // Retornar el producto actualizado
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar eliminación de producto en MongoDB
    // Usar deleteOne() o findOneAndDelete() con el filtro de ID
    // No retornar nada
    throw new Error('Method not implemented');
  }
}