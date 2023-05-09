const electrodomesticos = {
    "lavarropa": {
      "marca": "LG",
      "precio": 8000,
      "stock": 10
    },
    "heladera": {
      "marca": "Whirlpool",
      "precio":16000,
      "stock": 5
    },
    "horno": {
      "marca": "Mabe",
      "precio": 5000,
      "stock": 3
    }
  };
  for (let i = 0; i < 10; i++) {
    const marca = marcas[Math.floor(Math.random() * marcas.length)];
    const precio = (Math.random() * 20000 + 1000).toFixed(2);
    const stock = Math.floor(Math.random() * 20) + 1;
  };  

  