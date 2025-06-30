import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../features/productosSlice';
import ProductoForm from '../components/ProductoForm';
import ProductosList from '../components/ProductosList';

const Productos = () => {
  const dispatch = useDispatch();
  const productos = useSelector(state => state.productos.items);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  //if (loading) return <p>Cargando productos...</p>;
  //if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <ProductoForm />
      <ProductosList productos={productos} />
    </div>
  );
};

export default Productos;

