import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true); // estado para ocultar el sidebar

return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Contenido principal */}
      <main className="flex-1 p-6">

        {/* Botón para mostrar/ocultar el sidebar */}
       {/* Encabezado */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        </div>

        {/* Tarjetas de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Total Ventas</h2>
            <p className="text-2xl font-bold text-red-600">$12,345</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Clientes</h2>
            <p className="text-2xl font-bold text-green-600">87</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Productos</h2>
            <p className="text-2xl font-bold text-blue-600">34</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
