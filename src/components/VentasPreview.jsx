import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVentas } from '../features/ventasSlice';
import { Link } from 'react-router-dom';

const VentasPreview = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.ventas);

  useEffect(() => {
    dispatch(fetchVentas());
  }, [dispatch]);

  if (loading) return <p>Cargando ventas...</p>;
  if (error) return <p>Error: {error}</p>;

  const ultimasVentas = items
    .slice()
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha)) // ordenar por fecha desc
    .slice(0, 5);

  return (
    <div className="space-y-2">
      {ultimasVentas.map((venta) => (
        <div
          key={venta.id}
          className="p-3 border rounded-md shadow-sm bg-white"
        >
          <h3 className="font-semibold">{venta.producto}</h3>
          <p className="text-sm text-gray-600">Cliente: {venta.cliente}</p>
          <p className="text-sm">Fecha: {venta.fecha}</p>
          <p className="text-sm font-medium">
            Precio: {venta.precio_unitario} {venta.moneda}
          </p>
        </div>
      ))}

      <Link to="/ventas" className="text-blue-600 hover:underline block mt-3">
        Ver todas las operaciones →
      </Link>
    </div>
  );
};

export default VentasPreview;

