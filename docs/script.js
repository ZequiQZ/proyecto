const productos = [
    {
      nombre: 'ASUS ROG Strix G15',
      descripcion: 'Laptop gamer con alto rendimiento, pantalla 144Hz y grafica dedicada.',
      precio: 28999.99,
      imagen: 'img/asus.jpeg'
    },
    {
      nombre: 'HP Pavilion 15',
      descripcion: 'Ideal para estudiantes, buen equilibrio entre precio y rendimiento.',
      precio: 15999.90,
      imagen: 'img/pavilon.jpeg'
    },
    {
      nombre: 'MacBook Air M1',
      descripcion: 'Ligera, silenciosa y con excelente batería. Perfecta para productividad.',
      precio: 25999.00,
      imagen: 'img/macbook.png'
    },
    {
      nombre: 'Lenovo ThinkPad X1 Carbon',
      descripcion: 'Diseñada para negocios, ultraligera y muy duradera.',
      precio: 32999.99,
      imagen: 'img/super.jpeg'
    }
  ];
  
  const catalogo = document.getElementById('catalogo');
  
  function crearTarjetaProducto(producto) {
      const card = document.createElement('div');
      card.className = 'producto-card';
  
      const imagen = document.createElement('img');
      imagen.src = producto.imagen;
      imagen.alt = producto.nombre;
  
      const titulo = document.createElement('h2');
      titulo.textContent = producto.nombre;
  
      const descripcion = document.createElement('p');
      descripcion.textContent = producto.descripcion;
  
      const precio = document.createElement('span');
      precio.className = 'precio';
      precio.textContent = `$${producto.precio.toFixed(2)}`;
  
      const boton = document.createElement('button');
      boton.className = 'btn-comprar';
      boton.textContent = 'Comprar';
  
      card.appendChild(imagen);
      card.appendChild(titulo);
      card.appendChild(descripcion);
      card.appendChild(precio);
      card.appendChild(boton);
  
      return card;
  }
  
  function renderizarCatalogo() {
      productos.forEach(producto => {
          const tarjeta = crearTarjetaProducto(producto);
          catalogo.appendChild(tarjeta);
      });
  }
  
  window.onload = renderizarCatalogo;
  
