import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getGananciaMensual } from '../../api/api';

const GananciaMensualChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      getGananciaMensual().then(response => {
      const mappedData = response.data.map(item => ({
        mes: getNombreMes(item.mes),
        ganancia: parseFloat(item.total_ganancia)
      }));
      setData(mappedData);
    }).catch(err => {
        console.error('Error al obtener datos de ganancia mensual', error);
      
  })
}, []);

const getNombreMes = (numeroMes) => {
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return meses[numeroMes - 1] || "Desconocido";
};


return (
    <div className="rounded-2xl p-1 shadow-md">
      <h2 className="text-white text-sm font-semibold mb-2">Ganancia mensual</h2>
      <ResponsiveContainer width="15%" height={230}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ganancia" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GananciaMensualChart;

