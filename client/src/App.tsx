import React, { useState } from 'react';
import { Product, CreateProductDto, UpdateProductDto } from './types/product';
import { ProductTable } from './components/ProductTable';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  createProduct: (dto: CreateProductDto) => Promise<Product>;
  updateProduct: (id: string, dto: UpdateProductDto) => Promise<Product>;
  deleteProduct: (id: string) => Promise<void>;
}

declare const useProducts: () => UseProductsReturn;

const App: React.FC = () => {
  const { products, loading, error, createProduct, updateProduct, deleteProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<CreateProductDto>({
    name: '',
    price: 0,
    description: '',
    category: ''
  });

  const handleCreate = async () => {
    if (!formData.name || !formData.category) {
      return;
    }
    await createProduct(formData);
    setIsCreating(false);
    setFormData({ name: '', price: 0, description: '', category: '' });
  };

  const handleUpdate = async () => {
    if (!editingProduct) return;
    const updateDto: UpdateProductDto = {
      name: formData.name,
      price: formData.price,
      description: formData.description,
      category: formData.category
    };
    await updateProduct(editingProduct.id, updateDto);
    setEditingProduct(null);
    setFormData({ name: '', price: 0, description: '', category: '' });
  };

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category
    });
    setIsCreating(false);
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsCreating(false);
    setFormData({ name: '', price: 0, description: '', category: '' });
  };

  const startCreating = () => {
    setIsCreating(true);
    setEditingProduct(null);
    setFormData({ name: '', price: 0, description: '', category: '' });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gestión de Productos
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {editingProduct ? 'Editar Producto' : isCreating ? 'Nuevo Producto' : 'Formulario de Producto'}
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Precio"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
              fullWidth
              required
            />
            <TextField
              label="Descripción"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              fullWidth
              multiline
              rows={3}
            />
            <TextField
              label="Categoría"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              fullWidth
              required
            />
            
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              {editingProduct ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={handleUpdate}
                  >
                    Actualizar
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                </>
              ) : isCreating ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={handleCreate}
                  >
                    Guardar
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CancelIcon />}
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<AddIcon />}
                  onClick={startCreating}
                >
                  Nuevo Producto
                </Button>
              )}
            </Box>
          </Box>
        </Paper>

        <ProductTable
          products={products}
          loading={loading}
          error={error}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>
    </Container>
  );
};

export default App;