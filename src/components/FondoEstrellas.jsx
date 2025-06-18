import { useEffect } from 'react';
import { iniciarFondoEstrellas } from './FondoEstrellas';

const FondoEstrellado = () => {
  useEffect(() => {
    iniciarFondoEstrellas();
  }, []);

  return (
    <canvas
      id="fondo-estrellas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh'
      }}
    ></canvas>
  );
};

export default FondoEstrellado;

