import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product, UpdateProductDto } from '../types/product';

interface ProductTableProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  onEdit?: (product: Product) => void;
  onDelete: (id: string) => Promise<void>;
}

export const ProductTable: React.FC<ProductTableProps> = ({ 
  products, 
  loading, 
  error, 
  onEdit, 
  onDelete 
}) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [editForm, setEditForm] = useState<UpdateProductDto>({});

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (productToDelete) {
      try {
        await onDelete(productToDelete.id);
      } catch (err) {
        console.error('Error deleting product:', err);
      }
    }
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  const handleEditClick = (product: Product) => {
    setProductToEdit(product);
    setEditForm({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
    });
    setEditDialogOpen(true);
  };

  const handleConfirmEdit = () => {
    if (productToEdit && onEdit) {
      onEdit(productToEdit);
    }
    setEditDialogOpen(false);
    setProductToEdit(null);
    setEditForm({});
  };

  const handleCancelEdit = () => {
    setEditDialogOpen(false);
    setProductToEdit(null);
    setEditForm({});
  };

  const handleInputChange = (field: keyof UpdateProductDto) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'price' ? parseFloat(event.target.value) : event.target.value;
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const getCategoryColor = (category: string): 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' => {
    const colors: Record<string, 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'> = {
      electronics: 'primary',
      clothing: 'secondary',
      food: 'success',
      books: 'info',
      default: 'default',
    };
    return colors[category.toLowerCase()] || colors.default;
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography variant="h6" color="text.secondary">
          Cargando productos...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography variant="h6" color="text.secondary">
          No hay productos disponibles
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">Precio</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Descripción</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Categoría</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  '&:nth-of-type(odd)': {
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <TableCell component="th" scope="product">
                  <Typography variant="body1" fontWeight={500}>
                    {product.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1" color="primary" fontWeight={600}>
                    {formatPrice(product.price)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }}>
                    {product.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={product.category}
                    color={getCategoryColor(product.category)}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    onClick={() => handleEditClick(product)}
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handleDeleteClick(product)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={deleteDialogOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Está seguro de que desea eliminar el producto "{productToDelete?.name}"?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Esta acción no se puede deshacer.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={editDialogOpen} onClose={handleCancelEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Editar Producto</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Nombre"
              value={editForm.name || ''}
              onChange={handleInputChange('name')}
              fullWidth
              required
            />
            <TextField
              label="Precio"
              type="number"
              value={editForm.price || ''}
              onChange={handleInputChange('price')}
              fullWidth
              required
              inputProps={{ min: 0, step: 0.01 }}
            />
            <TextField
              label="Descripción"
              value={editForm.description || ''}
              onChange={handleInputChange('description')}
              fullWidth
              multiline
              rows={3}
            />
            <TextField
              label="Categoría"
              value={editForm.category || ''}
              onChange={handleInputChange('category')}
              fullWidth
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmEdit} color="primary" variant="contained">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductTable;