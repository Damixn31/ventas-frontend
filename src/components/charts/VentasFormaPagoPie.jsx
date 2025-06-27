import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useState, useEffect } from 'react';
import { getVentasPorFormaPago } from '../../api/api'; 

const COLORS = ["#6366f1", "#10b981", "#F59e0b", "#ef4444"];

const VentasFormaPagoPie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getVentasPorFormaPago().then(res => setData(res.data)).catch(err => console.error('Error al cargar forma de pago:', err));
  }, []);

  return ( 
    <div className="p-4 bg-gray-900 rounded-2xl shadow-xl w-full h-72">
      <h2 className="text-sm text-gray-200 text-center font-semibold mb-4">Ventas por forma de pago</h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="cantidad"
            nameKey="forma_pago"
            cx="50%"
            cy="50%"
            outerRadius={70}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.forma_pago} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

}

export default VentasFormaPagoPie;
