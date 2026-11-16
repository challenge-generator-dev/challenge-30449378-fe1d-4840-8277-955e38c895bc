import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';

const API_BASE_URL = 'http://localhost:3000';

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        const message = error.response?.data?.message || error.message;
        console.error('API Error:', message);
        return Promise.reject(error);
      }
    );
  }

  async getProducts(): Promise<Product[]> {
    const response: AxiosResponse<Product[]> = await this.client.get<Product[]>('/products');
    return response.data;
  }

  async getProduct(id: string): Promise<Product> {
    const response: AxiosResponse<Product> = await this.client.get<Product>(`/products/${id}`);
    return response.data;
  }

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const response: AxiosResponse<Product> = await this.client.post<Product>('/products', dto);
    return response.data;
  }

  async updateProduct(id: string, dto: UpdateProductDto): Promise<Product> {
    const response: AxiosResponse<Product> = await this.client.put<Product>(`/products/${id}`, dto);
    return response.data;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.client.delete(`/products/${id}`);
  }
}

export const apiService = new ApiService();
export default apiService;