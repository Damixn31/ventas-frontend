import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getIngresosPorMoneda } from '../../api/api';


const IngresosPorMonedaChart = () => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const cargarDatos = async () =>  {
      try {
        const res = await getIngresosPorMoneda();
        const formateando = res.data.map(item => ({
          moneda: item.moneda,
          ingresos: parseFloat(item.total_ingreso)
        }));
        setDatos(formateando);
      } catch (err) {
        console.error('Error al obtener ingresos por moneda', err);
      }
    };
    cargarDatos();
  }, []);

  return (
    <div className="p-4 shadow-xl rounded-2xl w-full h-72">
      <h2 className="text-sm text-gray-100 font-semibold mb-4">Ingresos por moneda</h2>
      <ResponsiveContainer width="35%" height="100%">
        <BarChart data={datos}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="moneda" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ingresos" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IngresosPorMonedaChart;
