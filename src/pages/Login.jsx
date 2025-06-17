 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

 function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include' //  cookies en el backend httpOnly
      });

      if (!res.ok) throw new Error('Login fallido');

      const data = await res.json();
      console.log('Login exitoso:', data);
      setMensaje('Login exitoso ✅');

      // Guardar el token si lo recibís
      //if (data.token) {
      //  localStorage.setItem('token', data.token);
      //}
      
      navigate('/dashboard');

    } catch (err) {
      console.error(err);
      setMensaje('Error en el login ❌');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );

 }

export default Login;

