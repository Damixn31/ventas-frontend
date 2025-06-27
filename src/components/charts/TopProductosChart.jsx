import React, { useEffect, useState } from 'react';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, CartesianGrid } from 'recharts';
import { getTopProductos } from '../../api/api';

const TopProductosChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTopProductos().then(response => {
      const formateando = response.data.map(p => ({
        nombre: p.Producto.nombre,
        cantidad: p.total_vendidos
      }));
      setData(formateando);
    }).catch (error => {
        console.error('Error al obtener los productos más vendidos:', error);
      });
  }, []);

  return (
 <div className="bg-gray-900 rounded-2xl p-6 shadow-md">
      <h2 className="text-sm text-gray-200 text-center font-semibold mb-4">Productos mas vendidos</h2>
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 20, bottom: 20, left: 25 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="nombre" type="category" />
          <Tooltip />
          <Bar dataKey="cantidad" barSize={24} fill="#60a5fa">
            <LabelList dataKey="cantidad" position="right" />
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
export default TopProductosChart;
