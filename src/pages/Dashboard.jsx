import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../api/api';

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  

  const handleLogout = async () => {
    try {
      await logoutUser();

      //localStorage.removeItem('token'); //borra el token 
      logout(); //limpa el usuario del contexto
      navigate('/login');
    } catch (err) {
      console.error('Error al cerrar sesión', err);
    }
  };


  return (
    <div>
      <h1>Estas en el Dashboad</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
