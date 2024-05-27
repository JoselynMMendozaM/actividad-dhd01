function generarEntradas() {
    const cantidadLibros = document.getElementById('cantidadLibros').value;
    const entradasLibros = document.getElementById('entradasLibros');
  
    entradasLibros.innerHTML = ''; // Limpiar entradas anteriores
  
    for (let i = 1; i <= cantidadLibros; i++) {
      const libroDiv = document.createElement('div');
      libroDiv.classList.add('libro');
  
      const tituloLabel = document.createElement('label');
      tituloLabel.textContent = `Título del libro ${i}:`;
      libroDiv.appendChild(tituloLabel);
  
      const tituloInput = document.createElement('input');
      tituloInput.type = 'text';
      libroDiv.appendChild(tituloInput);
  
      const autorLabel = document.createElement('label');
      autorLabel.textContent = `Autor del libro ${i}:`;
      libroDiv.appendChild(autorLabel);
  
      const autorInput = document.createElement('input');
      autorInput.type = 'text';
      libroDiv.appendChild(autorInput);
  
      const generoLabel = document.createElement('label');
      generoLabel.textContent = `Género del libro ${i}:`;
      libroDiv.appendChild(generoLabel);
  
      const generoInput = document.createElement('input');
      generoInput.type = 'text';
      libroDiv.appendChild(generoInput);
  
      entradasLibros.appendChild(libroDiv);
    }
  }
  