import { useState } from 'react';
import GananciaMensualChart from '../components/charts/GananciaMensualChart';
import TopProductosChart from '../components/charts/TopProductosChart';
import IngresosPorMonedaChart from '../components/charts/IngresosPorMonedaChart';
import VentasFormaPagoPie from '../components/charts/VentasFormaPagoPie';

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-400">
      {/* Contenido principal */}
      <main className="flex-1 p-4 overflow-x-hidden bg-slate-950">

        {/* Tarjetas de métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          <div className="bg-lime-400 rounded-2xl shadow p-4">
            <h2 className="text-sm font-semibold mb-2 ">Total Ventas</h2>
            <p className="text-2xl font-bold text-red-600">$12,345</p>
          </div>
          <div className="bg-lime-200 rounded-2xl shadow p-4">
            <h2 className="text-sm font-semibold mb-2">Clientes</h2>
            <p className="text-2xl font-bold text-green-600">87</p>
          </div>
          <div className="bg-lime-200 rounded-2xl shadow p-4">
            <h2 className="text-sm font-semibold mb-2">Productos</h2>
            <p className="text-2xl font-bold text-blue-600">34</p>
          </div>
        </div>

        {/* Grilla de charts */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="h-[300px]">
            <VentasFormaPagoPie />
          </div>
         <div className="h-[300px]">
            <IngresosPorMonedaChart />
          </div>
<div className="col-span-1 md:col-span-2 min-h-[300px]">
            <TopProductosChart />
          </div>

 

          <div className="col-span-1 md:col-span-2 min-h-[300px]">
            <GananciaMensualChart />
          </div>

          

                  
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

