import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
   //const token = localStorage.getItem('token');
  //if (!token) {
  //   return <Navigate to="/login" replace />;
  //}
  
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/me', {
        method: 'GET',
        credentials: 'include'
      });
      if (res.ok) {
        const data = await res.json();
        //console.log('usuario autenticado', data);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (err) {
      //console.error('Error al verificar autenticación', err);
      setIsAuth(false);
    }
  };
    checkAuth();
  }, []);

  if (isAuth === null) {
    return <p>Cargando....</p>; //agregar snniper  
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
