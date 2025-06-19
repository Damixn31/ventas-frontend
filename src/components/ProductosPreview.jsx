import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductos } from '../features/productosSlice';
import { Link } from 'react-router-dom';

const ProductosPreview = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.productos);

  useEffect(() => {
    dispatch(fetchProductos());
  }, [dispatch]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const primerosProductos = items.slice(0, 4);

  return (
    <div className="space-y-2">
      {primerosProductos.map((prod) => (
        <div key={prod.id} className="p-3 border rounded-md shadow-sm">
          <h3 className="font-semibold">{prod.nombre}</h3>
          <p>Precio: ${prod.precio}</p>
        </div>
      ))}

      <Link to="/productos" className="text-blue-600 hover:underline block mt-2">
        Ver todos los productos →
      </Link>
    </div>
  );
};

export default ProductosPreview;

