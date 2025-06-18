// src/components/FondoEstrellas.js
export function iniciarFondoEstrellas(canvasId = 'fondo-estrellas') {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const estrellas = [];
  const numEstrellas = 150;

  for (let i = 0; i < numEstrellas; i++) {
    estrellas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random(),
      da: Math.random() * 0.02
    });
  }

  function animar() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let estrella of estrellas) {
      ctx.beginPath();
      ctx.arc(estrella.x, estrella.y, estrella.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${estrella.alpha})`;
      ctx.fill();

      estrella.x += estrella.dx;
      estrella.y += estrella.dy;
      estrella.alpha += estrella.da;

      if (estrella.alpha <= 0 || estrella.alpha >= 1) {
        estrella.da = -estrella.da;
      }

      // Si se sale de los bordes, reaparece del otro lado
      if (estrella.x < 0) estrella.x = canvas.width;
      if (estrella.x > canvas.width) estrella.x = 0;
      if (estrella.y < 0) estrella.y = canvas.height;
      if (estrella.y > canvas.height) estrella.y = 0;
    }

    requestAnimationFrame(animar);
  }

  animar();

  // Adaptar a cambios de tamaño
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

