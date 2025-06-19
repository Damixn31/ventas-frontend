import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../api/api';

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      //localStorage.removeItem('token'); //borra el token 
      logout(); // limpia el usuario del contexto
      navigate('/login');
    } catch (err) {
      console.log("Error al cerrar sesión:", err);
    }
  };
  return (
     <div className="bg-gray-900 text-white w-64 min-h-screen p-4 flex flex-col">
      {/*parte superior*/}
        <h2 className="text-xl font-bold mb-6">BrunoCell</h2>
        <ul className="space-y-4">
           <li><Link to="/dashboard" className="hover:text-gray-400">Inicio</Link></li>
           <li><Link to="/ventas" className="hover:text-gray-400">Ventas</Link></li>
           <li><Link to="/productos" className="hover:text-gray-400">VentasFail</Link></li>
           <li><Link to="#" className="hover:text-gray-400">Configuración</Link></li>
        </ul>

      {/*parte inferior*/}
      <div className="mt-auto pt-6">
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-red-400 transition-colors"
          >
            Cerrar sesión
          </button>
      </div>
    </div>
  );
}
