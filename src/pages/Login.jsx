 import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

 import { loginUser } from '../api/api';

 import logo from '../assets/brunocell-icon.jpeg';
 import videoLogin from '../assets/video-espiral.mp4';

 function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       const res = await loginUser({ username, password });
       //setMensaje('Login exitoso ✅');
       navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setMensaje('Error en el login ❌');
    }
  };

  return (

<div className="relative h-screen overflow-hidden bg-black bg-opacity-40"> 

         <video
           src={videoLogin}
           autoPlay
           loop
           muted
           className="absolute top-0 left-0 w-full h-full object-cover z-0"
         /> 
        


<div className="min-h-screen bg-[#1C1C1E] flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-sm border border-[#29B6F6]">
        
        <div className="flex justify-center mb-2">
          <img src={logo} alt="Bruno Cell" className="w-24 h-24 rounded-full border-4 border-[#29B6F6]" />
        </div>


        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#29B6F6]"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#29B6F6]"
          />

          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-[#F9A825] hover:bg-yellow-600 text-black font-bold transition"
          >
            Iniciar sesión
          </button>
           
        </form>

        {mensaje && (
          <p className="text-center text-red-400 mt-4">{mensaje}</p>
        )}
      </div>

       {/* derecha*/}
       </div> 
    </div>
  );


 }

export default Login;

