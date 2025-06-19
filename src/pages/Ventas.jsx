import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVentas } from '../features/ventasSlice';

const Ventas = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.ventas);

  useEffect(() => {
    dispatch(fetchVentas());
  }, [dispatch]);

  if (loading) return <p>Cargando ventas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Historial de ventas</h1>
      <div className="grid gap-4">
        {items.map((venta) => (
          <div key={venta.id} className="p-4 border rounded-md shadow-sm bg-white">
            <h2 className="font-semibold text-lg">{venta.producto}</h2>
            <p>Cliente: {venta.cliente}</p>
            <p>Fecha: {venta.fecha}</p>
            <p>Precio unitario: ${venta.precio_unitario} {venta.moneda}</p>
            <p>Cantidad: {venta.cantidad}</p>
            <p>Ganancia: ${venta.ganancia}</p>
            <p>Forma de pago: {venta.forma_pago}</p>
            {venta.notas && <p className="italic text-sm">Notas: {venta.notas}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ventas;

