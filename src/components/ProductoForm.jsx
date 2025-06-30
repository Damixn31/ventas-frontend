import { useState } from 'react';
import { createProducto } from '../api/api';
import { useDispatch } from 'react-redux';
import { fetchProductos } from '../features/productosSlice';

//agregar categorias_id con un select en el front donde pongas todas las catergorias que tengo en la base de datos

export default function ProductoForm() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProducto({ nombre, precio_unitario: precio, stock });
    setNombre('');
    setPrecio('');
    setStock('');
    dispatch(fetchProductos());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        className="p-2 border rounded mr-2"
      />
      <input
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        placeholder="Precio"
        type="number"
        className="p-2 border rounded mr-2"
      />
      <input
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        placeholder="Stock"
        type="number"
        className="p-2 border rounded mr-2"
      />
      <button className="bg-blue-500 text-white p-2 rounded">Agregar</button>
    </form>
  );

}
