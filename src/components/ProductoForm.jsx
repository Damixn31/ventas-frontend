import { useState } from 'react';
import { createProducto } from '../api/api';
import { useDispatch } from 'react-redux';
import { fetchProductos } from '../features/productosSlice';

//agregar categorias_id con un select en el front donde pongas todas las catergorias que tengo en la base de datos

export default function ProductoForm() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProducto({ nombre, precio_unitario: precio, stock });
    setNombre('');
    setPrecio('');
    setStock('');
    setCategoriaId('');
    dispatch(fetchProductos());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold mb-4">Agregar producto</h2>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          className="w-full p-2 border rounded"
          required
        />
        <input
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
          type="number"
          className="w-full p-2 border rounded"
          required
        />
        <input
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          type="number"
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Agregar
        </button>
      </form>
    </div>
  );

}
