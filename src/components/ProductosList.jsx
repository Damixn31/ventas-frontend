import { useDispatch } from 'react-redux';
import { deleteProducto } from '../api/api';
import { fetchProductos } from '../features/productosSlice';
import { useState } from 'react';
import ConfirmModal from './ui/ConfirmModal';

export default function ProductosList({ productos }) {
  const [productoDelete, setProductoDelete] = useState(null);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenForm = () => setModalOpen(true);
  const handleCloseForm = () => setModalOpen(false);

  const handleDelete = async (id) => {
    await deleteProducto(id);
    dispatch(fetchProductos())
    setProductoDelete(null);
  }
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Precio</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">Categoría</th>
            <th className="px-4 py-2 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-4 py-2">{producto.id}</td>
              <td className="px-4 py-2">{producto.nombre}</td>
              <td className="px-4 py-2">${producto.precio_unitario}</td>
              <td className="px-4 py-2">{producto.stock}</td>
              <td className="px-4 py-2">
                {producto.Categoria?.nombre || 'Sin categoría'}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => setProductoDelete(producto)}
                  className="text-red-500 mt-2 text-sm hover:underline"
                >
                  Eliminar
                </button>

                {productoDelete && (
                  <ConfirmModal
                    isOpen={true}
                    onClose={() => setProductoDelete(null)}
                    onConfirm={() => handleDelete(productoDelete.id)}
                    title="¿Eliminar producto?"
                    description={`¿Estás seguro de que querés eliminar "${productoDelete.nombre}"? Esta acción no se puede deshacer.`}
                  />

                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}


