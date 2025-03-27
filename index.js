import React, { useState, useEffect } from 'react';
import { Container, Button } from './StyledComponents';

const InventoryManager = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  useEffect(() => {
    
    setProducts(['Producto 1', 'Producto 2', 'Producto 3']);
  }, []);

  const addProduct = () => {
    if (newProduct.trim() !== '') {
      setProducts([...products, newProduct]);
      setNewProduct('');
    }
  };

  return (
    <Container>
      <h2>Gestión de Inventarios</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newProduct} 
        onChange={(e) => setNewProduct(e.target.value)} 
        placeholder="Nuevo Producto" 
      />
      <Button onClick={addProduct}>Agregar Producto</Button>
    </Container>
  );
};

