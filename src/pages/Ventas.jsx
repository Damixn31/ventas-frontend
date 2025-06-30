import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVentas } from '../features/ventasSlice';

// cosas por agregar en el back
// 1. Filtro  por fecha o moneda
// 2. Ordenamiento  por culumna 
// 3. Exportar como CVS
// 4. Paginar resultardos 
// 5. Buscador por cliente o producto

const Ventas = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.ventas);
  //console.log(items);

  useEffect(() => {
    dispatch(fetchVentas());
  }, [dispatch]);

  if (loading) return <p>Cargando ventas...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-gray-200 text-2xl font-bold mb-6">Historial de Ventas</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left bg-white shadow rounded-lg">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3">Producto</th>
              <th className="px-4 py-3">Cliente</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Cantidad</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Ganancia</th>
              <th className="px-4 py-3">Moneda</th>
              <th className="px-4 py-3">Pago</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((venta) => (
              <tr
                key={venta.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 font-medium">{venta.Producto.nombre}</td>
                <td className="px-4 py-3">{venta.Cliente.nombre}</td>
                <td className="px-4 py-3">{venta.fecha}</td>
                <td className="px-4 py-3">{venta.cantidad}</td>
                <td className="px-4 py-3">${venta.precio_unitario}</td>
                <td className="px-4 py-3 text-green-600 font-semibold">
                  ${venta.ganancia}
                </td>
                <td className="px-4 py-3">{venta.moneda}</td>
                <td className="px-4 py-3 capitalize">{venta.forma_pago}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;

