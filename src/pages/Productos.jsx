import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../features/productosSlice';

const Productos = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Productos</h1>
      <ul className="grid gap-2">
        {items.map((prod) => (
          <li key={prod.id} className="p-2 border rounded shadow-sm">
            <h2 className="text-lg font-semibold">{prod.nombre}</h2>
            <p>Precio: ${prod.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;

