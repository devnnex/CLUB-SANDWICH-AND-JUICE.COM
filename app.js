// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573107733123'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 4000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  { //TRADICIONALES
    id: 'tra1',
    category: 'tradicionales',
    title: 'Sencillo',
    price: 8400,
    desc: 'Pan tajado, jamón, queso, pollo desmechado, salsa especial dela casa, lechuga y tomate chonto',
    image: 'images/sencillo.png',
    ingredients: ['Pan tajado', 'Jamón', 'Queso', 'Pollo desmechado', 'Salsa de la casa', 'Lechuga', 'Tomate chonto'],
    extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
  },
  { 
    id: 'tra2',
    category: 'tradicionales',
    title: 'Basico',
    price: 10200,
    desc: 'Pan tajado, jamón, queso, carne tipo burger, BBQ, lechuga, tomate milano y salsa especial de la casa.',
    image: 'images/basico.png',
   ingredients: ['Pan tajado', 'Jamón', 'Queso', 'Carne tipo burger', 'BBQ', 'Lechuga', 'Tomate milano', 'Salsa de la casa'],
    extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
  },
  { 
    id: 'tra3',
    category: 'tradicionales',
    title: 'Mixto',
    price: 10200,
    desc: 'Pan tajado, jamón, queso tajado, pollo y carne desmechada, lechuga, tomate milano, BBQ y salsa especial de la casa.',
    image: 'images/mixto.png',
    ingredients: ['Pan tajado', 'Jamón', 'Queso tajado', 'Pollo desmechado', 'Carne desmechada', 'Lechuga', 'Tomate milano', 'BBQ', 'Salsa de la casa'],
    extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
  },
  // === DE LA CASA ===
  {  
  id: 'de1',
  category: 'de la casa',
  title: 'Club House Pollo',
  price: 15900,
  desc: 'Pan tajado en capaz, exquisita pechuga de pollo a la plancha con salsa de ciruela, tocineta, jamón, queso, huevo, lechuga, tomate chonto y nuestra salsa de la casa y porción de papas',
  image: 'images/clubHousePollo.png',
  ingredients: ['Pan tajado en capaz', 'Pechuga de pollo a la plancha con salsa de ciruela', 'Tocineta', 'Jamón', 'Queso', 'Huevo', 'Lechuga', 'Tomate chonto', 'Salsa de la casa', 'Porción de papas'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{  
  id: 'de2',
  category: 'de la casa',
  title: 'Club House Carne',
  price: 15900,
  desc: 'Pan tajado en capaz, deliciosa carne tipo burger con salsa BBQ, tocineta, jamón, queso, huevo, lechuga, tomate milano y nuestra salsa de la casa y porción de papas',
  image: 'images/clubHouseCarne.png',
  ingredients: ['Pan tajado en capas', 'Carne tipo burger con salsa BBQ', 'Tocineta', 'Jamón', 'Queso', 'Huevo', 'Lechuga', 'Tomate milano', 'Salsa de la casa', 'Porción de papas'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{  
  id: 'de3',
  category: 'de la casa',
  title: 'Club House Bell',
  price: 25900,
  desc: 'Pan tajado en capaz, pechuga de pollo a la plancha, carne tipo burger, tocineta, jamón, queso, huevo, lechuga, tomate, salsa de ciruela, BBQ, nuestra salsa de la casa, cobertura de queso fundido y porción de papas',
  image: 'images/clubHousePollo.png',
  ingredients: ['Pan tajado en capas', 'Pechuga de pollo a la plancha', 'Carne tipo burger', 'Tocineta', 'Jamón', 'Queso', 'Huevo', 'Lechuga', 'Tomate', 'Salsa de ciruela', 'BBQ', 'Salsa de la casa', 'Cobertura de queso fundido', 'Porción de papas'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
// === SANDWICHES ===
{ 
  id: 'esp1',
  category: 'especiales',
  title: 'Concorde Pollo',
  price: 19900,
  desc: 'Pan cubano, pechuga a la plancha en cuadritos (200gr) con cebolla salteada, maíz, tocineta, lechuga, tomate chonto, chipotle, salsa de tomate y queso fundido',
  image: 'images/ConcordePollo.png',
  ingredients: ['Pan cubano', 'Pechuga a la plancha en cuadritos (200gr)', 'Cebolla salteada', 'Maíz', 'Tocineta', 'Lechuga', 'Tomate chonto', 'Chipotle', 'Salsa de tomate', 'Queso fundido'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'esp1',
  category: 'especiales',
  title: 'Concorde Carne',
  price: 21900,
  desc: 'Pan cubano, carne de res en cuadritos (200gr) con cebolla salteada, tocineta, lechuga, tomate chonto, nachos,  BBQ, salsa de la casa y queso cheddar',
  image: 'images/ConcordeCarne.png',
  ingredients: ['Pan cubano', 'Carne de res en cuadritos (200gr)', 'Cebolla salteada', 'Tocineta', 'Lechuga', 'Tomate chonto', 'Nachos', 'BBQ', 'Salsa de la casa', 'Queso cheddar'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'esp1',
  category: 'especiales',
  title: 'Concorde Mix',
  price: 22900,
  desc: 'Pan cubano, pechuga y carne de res en cuadritos (200gr) con cebolla salteada, tocineta, lechuga, tomate chonto, BBQ, salsa especial de la casa y queso fundido.',
  image: 'images/ConcordeMix.png',
  ingredients: ['Pan cubano', 'Pechuga en cuadritos (200gr)', 'Carne de res en cuadritos (200gr)', 'Cebolla salteada', 'Tocineta', 'Lechuga', 'Tomate chonto', 'BBQ', 'Salsa especial de la casa', 'Queso fundido'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},

// === CUBANOS ===
{ 
  id: 'cub1',
  category: 'cubanos',
  title: 'Jet',
  price: 14500,
  desc: 'Creación vegetariana,  champiñones, maíz, aguacate, queso, lechuga, tomate, cebolla, pepino, pimentón, salsa especial de la casa y mostaza',
  image: 'images/jet.png',
  ingredients: ['Champiñones', 'Maíz', 'Aguacate', 'Queso', 'Lechuga', 'Tomate', 'Cebolla', 'Pepino', 'Pimentón', 'Salsa especial de la casa', 'Mostaza'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub2',
  category: 'cubanos',
  title: 'Caravan',
  price: 14900,
  desc: 'Deliciosa combinación de pollo desmechado, maíz, jamón, queso, lechuga, tomate chonto, cebolla, pepino, pimentón y nuestra salsa especial de la casa',
  image: 'images/caravan.png',
  ingredients: ['Pollo desmechado', 'Maíz', 'Jamón', 'Queso', 'Lechuga', 'Tomate chonto', 'Cebolla', 'Pepino', 'Pimentón', 'Salsa especial de la casa'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub3',
  category: 'cubanos',
  title: 'Navajo',
  price: 15200,
  desc: 'Exquisita mezcla de pollo a la plancha en cuadritos,  champiñones, jamón, queso tajado, lechuga, tomate chonto, cebolla, pepino, salsa BBQ y salsa especial de la casa',
  image: 'images/navajo.png',
  ingredients: ['Pollo a la plancha en cuadritos', 'Champiñones', 'Jamón', 'Queso tajado', 'Lechuga', 'Tomate chonto', 'Cebolla', 'Pepino', 'Salsa BBQ', 'Salsa especial de la casa'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub4',
  category: 'cubanos',
  title: 'El capi',
  price: 15900,
  desc: 'Exquisito pollo apanado, piña en almibar, doble queso, lechuga, tomate chonto, cebolla y mostaza',
  image: 'images/elcapi.png',
  ingredients: ['Pollo apanado', 'Piña en almíbar', 'Doble queso', 'Lechuga', 'Tomate chonto', 'Cebolla', 'Mostaza'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub5',
  category: 'cubanos',
  title: 'Napolitano',
  price: 15900,
  desc: 'Estupenda combinación de chorizo especial, pepperoni, tocineta, doble queso, lechuga, tomate chonto, cebolla y salsa napolitana.',
  image: 'images/napolitano.png',
  ingredients: ['Chorizo especial', 'Pepperoni', 'Tocineta', 'Doble queso', 'Lechuga', 'Tomate chonto', 'Cebolla', 'Salsa napolitana'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub6',
  category: 'cubanos',
  title: 'Tunez',
  price: 15900,
  desc: 'Lomo de atún, maíz, aguacate, lechuga, tomate chonto, cebolla, pepino, salsa especial de la casa y nuestra salsa de ajo',
  image: 'images/tunez.png',
  ingredients: ['Lomo de atún', 'Maíz', 'Aguacate', 'Lechuga', 'Tomate chonto', 'Cebolla', 'Pepino', 'Salsa especial de la casa', 'Salsa de ajo'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub7',
  category: 'cubanos',
  title: 'Pilatus',
  price: 16900,
  desc: 'Deliciosa carne desmechada, maiz, jamon, queso tajado, lechuga, tomate milano, cebolla, pepino, pimenton, salsa BBQ y salsa de ajo',
  image: 'images/pilatus.png',
  ingredients: ['Carne desmechada', 'Maíz', 'Jamón', 'Queso tajado', 'Lechuga', 'Tomate milano', 'Cebolla', 'Pepino', 'Pimentón', 'Salsa BBQ', 'Salsa de ajo'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub8',
  category: 'cubanos',
  title: 'Viaje a Mexico',
  price: 17500,
  desc: 'Carne molida, maíz, jalapeños, pico de gallo, doble queso, nachos, lechuga, salsa especial de la casa y chipotle',
  image: 'images/viajeAMexico.png',
  ingredients: ['Carne molida', 'Maíz', 'Jalapeños', 'Pico de gallo', 'Doble queso', 'Nachos', 'Lechuga', 'Salsa especial de la casa', 'Chipotle'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub9',
  category: 'cubanos',
  title: 'El Turista',
  price: 17900,
  desc: 'Combinación de pollo y carne desmechada, tocineta, jamón, queso doble crema, lechuga, tomate milano, cebolla, pepino, pimentón, salsa BBQ y salsa de la casa',
  image: 'images/Elturista.png',
  ingredients: ['Pollo desmechado', 'Carne desmechada', 'Tocineta', 'Jamón', 'Queso doble crema', 'Lechuga', 'Tomate milano', 'Cebolla', 'Pepino', 'Pimentón', 'Salsa BBQ', 'Salsa de la casa'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub10',
  category: 'cubanos',
  title: 'Porky',
  price: 18500,
  desc: 'Combinación de lomo de cerdo y tocino en cuadritos, salami, jamón, queso, lechuga, tomate chonto, cebolla , pimentón, nuestra salsa de ciruela y mostaza',
  image: 'images/porky.png',
  ingredients: ['Lomo de cerdo en cuadritos', 'Tocino en cuadritos', 'Salami', 'Jamón', 'Queso', 'Lechuga', 'Tomate chonto', 'Cebolla', 'Pimentón', 'Salsa de ciruela', 'Mostaza'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub11',
  category: 'cubanos',
  title: 'Beluga',
  price: 18500,
  desc: 'Deliciosa carne burger, tocineta, jamon, queso tajado, pepinillos agridulces, guacamole, lechuga, tomate chonto, cebolla grille, y nuestra salsa de ajo.',
  image: 'images/beluga.png',
  ingredients: ['Carne burger', 'Tocineta', 'Jamón', 'Queso tajado', 'Pepinillos agridulces', 'Guacamole', 'Lechuga', 'Tomate chonto', 'Cebolla grille', 'Salsa de ajo'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cub12',
  category: 'cubanos',
  title: 'Camarote',
  price: 18500,
  desc: 'Exquisita combinacion de camarones, salsa rosada especial de la casa, aguacate, doble queso, lechuga, tomate chonto, cebolla y salsa de tomate.',
  image: 'images/camarote.png',
  ingredients: ['Camarones', 'Salsa rosada especial de la casa', 'Aguacate', 'Doble queso', 'Lechuga', 'Tomate chonto', 'Cebolla', 'Salsa de tomate'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
// === CASCOS ===
{ 
  id: 'cas1',
  category: 'cascos',
  title: 'Mexicano',
  price: 22900,
  desc: 'Casco de papa, carne desmechada, guacamole, queso cheddar, nachos, jalapeños y pico de gallo.',
  image: 'images/mexicano.png',
  ingredients: ['Casco de papa', 'Carne desmechada', 'Guacamole', 'Queso cheddar', 'Nachos', 'Jalapeños', 'Pico de gallo'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'cas2',
  category: 'cascos',
  title: 'Peruano',
  price: 24900,
  desc: 'Casco de papa, lomo fino y verduras saltadas en salsa de soya (tomate, cebolla, pimentón amarillo)',
  image: 'images/peruano.png',
  ingredients: ['Casco de papa', 'Lomo fino', 'Verduras saltadas en salsa de soya (tomate, cebolla, pimentón amarillo)'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
// === ASADOS ===
{ 
  id: 'as1',
  category: 'asados',
  title: 'Pechuga',
  price: 19900,
  desc: 'Pechuga a la plancha, papas a la francesa y ensalada',
  image: 'images/pechuga.png',
  ingredients: ['Pechuga a la plancha', 'Papas a la francesa', 'Ensalada'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 'as2',
  category: 'asados',
  title: 'Lomo',
  price: 20900,
  desc: 'Lomo de res, papas a la francesa y ensalada',
  image: 'images/lomo.png',
  ingredients: ['Lomo de res', 'Papas a la francesa', 'Ensalada'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
// === SALADS ===
{ 
  id: 's1',
  category: 'salads',
  title: 'Chicken Salad',
  price: 17900,
  desc: 'Pechuga a la plancha en cuadritos, champiñones, lechuga, tomate, cebolla, pepino, guacamole, vinagreta',
  image: 'images/chickensalad.png',
  ingredients: ['Pechuga a la plancha en cuadritos', 'Champiñones', 'Lechuga', 'Tomate', 'Cebolla', 'Pepino', 'Guacamole', 'Vinagreta'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
{ 
  id: 's1',
  category: 'salads',
  title: 'Tuna',
  price: 17900,
  desc: 'Lomo de atún, maíz, aguacate, lechuga, pico de gallo, vinagreta',
  image: 'images/tuna.png',
 ingredients: ['Lomo de atún', 'Maíz', 'Aguacate', 'Lechuga', 'Pico de gallo', 'Vinagreta'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
// === MENU INFANTIL ===
{ 
  id: 'mi1',
  category: 'menu infantil',
  title: 'Mini',
  price: 15900,
  desc: 'Pan tajado, jamon, queso, papas a la francesa, granizada, juguete sorpresa',
  image: 'images/mini.png',
  ingredients: ['Pan tajado', 'Jamón', 'Queso', 'Papas a la francesa', 'Granizada', 'Juguete sorpresa'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},

{ 
  id: 'mi2',
  category: 'menu infantil',
  title: 'Nuggets',
  price: 15900,
  desc: 'Nuggets de pollo, papas a la francesa, granizada, juguete sorpresa',
  image: 'images/nuggets.png',
  ingredients: ['Nuggets de pollo', 'Papas a la francesa', 'Granizada', 'Juguete sorpresa'],
  extras: [{ name: 'Jamón', price: 1200 }, { name: 'Queso', price: 1500 }, { name: 'Piña en almíbar', price: 1600 }, { name: 'Maíz', price: 2000 }, { name: 'Aguacate', price: 2000 }, { name: 'Jalapeños', price: 2500 }, { name: 'Pepinillos agridulces', price: 2500 }, { name: 'Tocineta', price: 2500 }, { name: 'Champiñones', price: 3000 }, { name: 'Salami', price: 3000 }, { name: 'Pepperoni', price: 3000 }, { name: 'Pollo desmechado', price: 3500 }, { name: 'Carne desmechada', price: 4500 }, { name: 'Pollo apanado', price: 4500 }, { name: 'Carne molida', price: 4500 }, { name: 'Pollo picado', price: 4500 }, { name: 'Atún', price: 5500 }, { name: 'Lomo de cerdo', price: 6000 }, { name: 'Carne picada', price: 6000 }, { name: 'Chorizo', price: 6000 }, { name: 'Carne burger larga', price: 7000 }, { name: 'Camarones', price: 8500 }, { name: 'Cereza', price: 400 }, { name: 'Maicitos', price: 2000 }, { name: 'Porción de papas a la francesa', price: 3500 }, { name: 'Huevos de codorniz', price: 1500 }]
},
// === JUGOS NATURALES ===
{
  id: 'jn1',
  category: 'jugos naturales',
  title: 'Jugo de Mango',
  price: 7000,
  desc: 'Refrescante jugo natural de mango preparado al momento.',
  image: 'images/jugo1.png',
  ingredients: ['Mango fresco', 'Azúcar', 'Hielo']
},

// === COMBINADOS ===
{
  id: 'comb1',
  category: 'combinados',
  title: 'Limonada de Coco',
  price: 9000,
  desc: 'Refrescante limonada de coco, cremosa y tropical, disponible en agua o en leche.',
  image: 'images/limonada1.png',
  ingredients: ['Limón', 'Crema de coco', 'Agua o Leche', 'Azúcar', 'Hielo']
},
// === GRANIZADOS ===
{
  id: 'g1',
  category: 'granizados',
  title: 'Granizado de limón',
  price: 6200,
  desc: 'Delicioso granizado de limón, perfecto para refrescarte en cualquier momento.',
  image: 'images/limon.png'
},
{
  id: 'g2',
  category: 'granizados',
  title: 'Granizado de Naranja',
  price: 6200,
  desc: 'Delicioso granizado de naranja, lleno de sabor cítrico y frescura.',
  image: 'images/naranja.png'
},
{
  id: 'g3',
  category: 'granizados',
  title: 'Granizado de Mandarina',
  price: 6200,
  desc: 'Delicioso granizado de mandarina, lleno de frescura y sabor cítrico.',
  image: 'images/mandarina.png'
},
{
  id: 'g4',
  category: 'granizados',
  title: 'Granizado de Maracuyá',
  price: 6200,
  desc: 'Refrescante granizado de maracuyá con un toque tropical.',
  image: 'images/maracuya.png'
},
{
  id: 'g5',
  category: 'granizados',
  title: 'Granizado de tamarindo',
  price: 6200,
  desc: 'Tamarindo dulce y ácido en un granizado refrescante.',
  image: 'images/tamarindo.png'
},
// === LIMONADAS ===
{ 
    id: 'l1',
    category: 'limonadas',
    title: 'Limonada de Soda',
    price: 7000,
    desc:'Refrescante limonada preparada con soda',
    image: 'images/limosoda.png'
  },
  { 
    id: 'l2',
    category: 'limonadas',
    title: 'Limonada de Maracuyá',
    price: 7000,
    desc:'Limonada de maracuyá bien fría para refrescar tu día',
    image: 'images/maracuyaa.png'
  },

  { 
    id: 'l3',
    category: 'limonadas',
    title: 'Limonada de Lulo',
    price: 7000,
    desc:'Refrescante limonada de lulo bien fría para tu día a día',
    image: 'images/lulo.png'
  },

  { 
    id: 'l4',
    category: 'limonadas',
    title: 'Limonada de Piña',
    price: 7000,
    desc:'Limonada de piña rica y fría hidratar tu día',
    image: 'images/piña.png'
  },

  { 
    id: 'l5',
    category: 'limonadas',
    title: 'Limonada de Cereza',
    price: 7000,
    desc:'Sabrosa limonada de cereza para refrescar tu día',
    image: 'images/cereza.png'
  },

  { 
    id: 'l6',
    category: 'limonadas',
    title: 'Limonada de Hierbabuena',
    price: 7000,
    desc:'Hierbabuena fresca y limón en una deliciosa limonada',
    image: 'images/hierbaBuena.png'
  },
  { 
    id: 'l7',
    category: 'limonadas',
    title: 'Limonada de coco',
    price: 7000,
    desc:'Esquisita limonada de coco para refrescar tu día',
    image: 'images/coco.png'
  },
  // === JUGOS DETOX ===
  { 
    id: 'jd1',
    category: 'jugos detox',
    title: 'Detox Orange',
    price: 6500,
    desc:'Espinaca, pepino, rama de apio  y naranja',
    image: 'images/jugoDetox.png',
    ingredients: ['Espinaca', 'Pepino', 'Rama de apio', 'Naranja']
  },
  { 
    id: 'jd1',
    category: 'jugos detox',
    title: 'Detox Lemon',
    price: 6500,
    desc:'Espinaca, pepino, manzana verde y limón',
    image: 'images/jugoDetox.png',
    ingredients: ['Espinaca', 'Pepino', 'Manzana verde', 'Limón']
  },
  // === OTRAS BEBIDAS ===
  { 
    id: 'ot1',
    category: 'otras bebidas',
    title: 'Agua Pequeña',
    price: 1200,
    desc:'Agua pura y refrescante',
    image: 'images/aguaPequeña.png'
  },
  { 
    id: 'ot2',
    category: 'otras bebidas',
    title: 'Soda',
    price: 3000,
    desc:'Papas con toppings',
    image: 'images/soda.png'
  },
  { 
    id: 'ot3',
    category: 'otras bebidas',
    title: 'Papas Loks ',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap5.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'ot4',
    category: 'otras bebidas',
    title: 'Papas Lokis',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap6.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'ot5',
    category: 'otras bebidas',
    title: 'Fanta Naranja 330ml',
    price: 4500,
    desc:'Refresco',
    image: 'images/beb1.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'ot6',
    category: 'otras bebidas',
    title: 'Coca Cola 1.5L',
    price: 7500,
    desc:'Refresco',
    image: 'images/beb2.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'ot7',
    category: 'otras bebidas',
    title: 'Fanta Lata',
    price: 3500,
    desc:'Refresco',
    image: 'images/beb3.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'ot8',
    category: 'otras bebidas',
    title: 'Pepsi Lata',
    price: 5500,
    desc:'Refresco',
    image: 'images/beb4.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'ot9',
    category: 'otras bebidas',
    title: 'Monster Lata',
    price: 7500,
    desc:'Refresco',
    image: 'images/beb5.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'ot10',
    category: 'otras bebidas',
    title: 'Schweppes Lata',
    price: 5500,
    desc:'Refresco',
    image: 'images/beb6.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'ot11',
    category: 'otras bebidas',
    title: 'Jugo Hit 300ml',
    price: 25000,
    desc:'Con salsa especial',
    image: 'images/otros1.png',
    ingredients:['Salsa'],
    extras: [{ name: 'Maicitos', price: 2000 },{ name: 'Porción de papas a la francesa', price: 3500 },{ name: 'Huevos de codorniz', price: 1500 },{ name: 'Queso', price: 1500 },{ name: 'Tocineta', price: 2500 }]
  }
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'tradicionales';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}

// ---------- Render productos ----------
function renderProducts(cat){
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => p.category === cat && (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
  catalogEl.innerHTML = '';

  if(items.length === 0){
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', ()=> openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}

// ---------- Modal producto ----------
function openProductModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  productModal.classList.remove('hidden');
  productModal.setAttribute('aria-hidden', 'false');
  modalContent.innerHTML = '';

  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  modalInner.innerHTML = `
    <div class="modal-header">
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="modal-img">
      <h3>${escapeHtml(p.title)} — $${numberWithCommas(p.price)}</h3>
      <p class="desc">${escapeHtml(p.desc)}</p>
    </div>
    <div class="modal-body scrollable-area"></div>
    <div class="modal-footer">
      <div class="qty-controls">
        <button id="qty-decr" type="button">-</button>
        <span id="qty-val">1</span>
        <button id="qty-incr" type="button">+</button>
      </div>
      <div class="price-actions">
        <div id="price-breakdown">
          <div><strong>Subtotal:</strong> <span id="subtotal">$${numberWithCommas(p.price)}</span></div>
          <div><strong>Adicionales:</strong> <span id="extras-total">$0</span></div>
          <div><strong>Total:</strong> <span id="modal-price">$${numberWithCommas(p.price)}</span></div>
        </div>
        <button id="modal-add" class="btn-primary" type="button">Añadir al carrito</button>
      </div>
    </div>
  `;

  const scrollArea = modalInner.querySelector('.scrollable-area');
  let ingSection = null, extrasSection = null;

  // === Sección generadora ===
  function buildSection(title, items, dataAttr) {
    const section = document.createElement('div');
    section.className = 'section collapsed';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `<strong>${title} ▼</strong>`;

    const body = document.createElement('div');
    body.className = 'section-body checklist';

    items.forEach((item, idx) => {
      const id = `${dataAttr}-${p.id}-${idx}`;
      const label = document.createElement('label');
      label.className = 'check-item';

      if (dataAttr === 'ing') {
        label.innerHTML = `
          <input type="checkbox" data-ing="${escapeHtml(item)}" id="${id}">
          <span>Quitar ${escapeHtml(item)}</span>
        `;
      } else {
        label.innerHTML = `
          <div class="extra-item">
            <label>
              <input type="checkbox" data-extra="${escapeHtml(item.name)}" data-price="${item.price}" id="${id}">
              <span>${escapeHtml(item.name)} (+$${numberWithCommas(item.price)})</span>
            </label>
            <div class="extra-qty hidden">
              <button type="button" class="ex-decr">-</button>
              <span class="ex-val">1</span>
              <button type="button" class="ex-incr">+</button>
            </div>
          </div>
        `;
      }

      body.appendChild(label);
    });

    section.appendChild(header);
    section.appendChild(body);
    scrollArea.appendChild(section);
    return { section, header };
  }

  // === Ingredientes y adicionales ===
  if (p.ingredients?.length) {
    const { section, header } = buildSection('Quitar ingredientes', p.ingredients, 'ing');
    ingSection = section;
    header.addEventListener('click', () => {
      const open = !ingSection.classList.contains('collapsed');
      ingSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Quitar ingredientes ${open ? '▼' : '▲'}</strong>`;
      if (extrasSection) {
        extrasSection.classList.add('collapsed');
        extrasSection.querySelector('.section-header').innerHTML = '<strong>Agregar adicionales ▼</strong>';
      }
    });
  }

  if (p.extras?.length) {
    const { section, header } = buildSection('Agregar adicionales', p.extras, 'ex');
    extrasSection = section;
    header.addEventListener('click', () => {
      const open = !extrasSection.classList.contains('collapsed');
      extrasSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Agregar adicionales ${open ? '▼' : '▲'}</strong>`;
      if (ingSection) {
        ingSection.classList.add('collapsed');
        ingSection.querySelector('.section-header').innerHTML = '<strong>Quitar ingredientes ▼</strong>';
      }
    });
  }

  modalContent.appendChild(modalInner);

  // === Lógica de cantidad ===
  let qty = 1;
  function getExtrasSum() {
    let total = 0;
    modalContent.querySelectorAll('input[data-extra]:checked').forEach(chk => {
      const price = Number(chk.dataset.price);
      const parent = chk.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      total += price * exQty;
    });
    return total;
  }

  function updateModalPrice() {
    const extrasSum = getExtrasSum();
    const subtotal = p.price * qty;
    const total = subtotal + extrasSum;

    document.getElementById('subtotal').textContent = '$' + numberWithCommas(subtotal);
    document.getElementById('extras-total').textContent = '$' + numberWithCommas(extrasSum);
    document.getElementById('modal-price').textContent = '$' + numberWithCommas(total);
  }

  // === Eventos de cantidad global ===
  modalContent.querySelector('#qty-decr').addEventListener('click', () => {
    if (qty > 1) qty--;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });
  modalContent.querySelector('#qty-incr').addEventListener('click', () => {
    qty++;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });

  // === Checkbox adicionales con contador ===
  modalContent.addEventListener('change', e => {
    if (e.target.matches('input[data-extra]')) {
      const extraItem = e.target.closest('.extra-item');
      const qtyBox = extraItem.querySelector('.extra-qty');
      qtyBox.classList.toggle('hidden', !e.target.checked);
      updateModalPrice();
    }
  });

// === Control preciso de botones + y - para adicionales ===
['click', 'touchstart'].forEach(evtType => {
  modalContent.addEventListener(evtType, e => {
    const btn = e.target.closest('.ex-incr, .ex-decr');
    if (!btn) return;

    e.stopPropagation();
    e.preventDefault();

    // Previene clicks múltiples simultáneos
    if (btn.disabled) return;
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, 150);

    const qtyBox = btn.closest('.extra-qty');
    const valEl = qtyBox.querySelector('.ex-val');
    let val = Number(valEl.textContent);

    if (btn.classList.contains('ex-incr')) val++;
    else if (val > 1) val--;

    valEl.textContent = val;
    updateModalPrice();
  });
});



  // === Añadir al carrito ===
  modalContent.querySelector('#modal-add').addEventListener('click', () => {
    const removed = Array.from(modalContent.querySelectorAll('input[data-ing]:checked')).map(i => i.dataset.ing);
    const extras = Array.from(modalContent.querySelectorAll('input[data-extra]:checked')).map(i => {
      const parent = i.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      return {
        name: i.dataset.extra,
        price: Number(i.dataset.price),
        qty: exQty
      };
    });
    addToCart({ productId: p.id, title: p.title, price: p.price, qty, removed, extras });
    closeProductModal();
  });
}









function closeProductModal(){
  productModal.classList.add('hidden');
  productModal.setAttribute('aria-hidden','true');
  modalContent.innerHTML = '';
}
modalClose.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e)=>{ if(e.target === productModal) closeProductModal(); });

// ---------- Carrito ----------
function addToCart(item){
  const key = generateCartKey(item);
  const existing = cart.find(c => c.key === key);
  if(existing){ existing.qty += item.qty; }
  else{ cart.push({...item, key}); }
  persistCart();
  refreshCartUI();
}

function generateCartKey(it){
  const extrasPart = (it.extras || []).map(e => e.name).sort().join('|') || '';
  const removedPart = (it.removed || []).slice().sort().join('|') || '';
  return `${it.productId}::${extrasPart}::${removedPart}`;
}

function persistCart(){
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

function refreshCartUI(){
  cartCountEl.textContent = String(cart.reduce((s,i) => s + i.qty, 0));
  cartItemsEl.innerHTML = '';
  let subtotal = 0;

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<div class="muted">Tu carrito está vacío</div>';
  } else {
    cart.forEach((c, idx)=>{
      const extrasText = (c.extras && c.extras.length) ? ('+' + c.extras.map(e=>e.name).join(', ')) : '';
      const removedText = (c.removed && c.removed.length) ? ('(sin ' + c.removed.join(', ') + ')') : '';
      const extrasSum = (c.extras || []).reduce((s,e)=> s + (e.price || 0), 0);
      const itemTotal = (c.price + extrasSum) * c.qty;
      subtotal += itemTotal;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="info">
          <div><strong>${escapeHtml(c.title)}</strong> ${escapeHtml(removedText)}</div>
          <div class="muted">${escapeHtml(extrasText)}</div>
        </div>
        <div style="text-align:right">
          <div>$${numberWithCommas(itemTotal)}</div>
          <div class="qty-controls">
            <button data-action="decr" data-idx="${idx}" type="button">-</button>
            <span>${c.qty}</span>
            <button data-action="incr" data-idx="${idx}" type="button">+</button>
            <button data-action="del" data-idx="${idx}" type="button">🗑</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
  }

  cartSubtotalEl.textContent = '$' + numberWithCommas(subtotal);
  
 cartDeliveryEl.textContent = '$0';
cartTotalEl.textContent = '$' + numberWithCommas(subtotal);

  // bind buttons
  cartItemsEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const action = btn.dataset.action;
      const i = Number(btn.dataset.idx);
      if(Number.isNaN(i)) return;
      if(action === 'incr') cart[i].qty++;
      else if(action === 'decr') cart[i].qty = Math.max(1, cart[i].qty - 1);
      else if(action === 'del') cart.splice(i, 1);
      persistCart();
      refreshCartUI();
    });
  });
}

// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------
function openCheckout(){
  if(cart.length === 0){ alert('El carrito está vacío.'); return; }
  checkoutForm.reset();
  addressLabel.classList.add('hidden');
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden','false');
}

checkoutClose.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); checkoutModal.setAttribute('aria-hidden','true'); });
backToCartBtn.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); cartDrawer.classList.remove('hidden'); });

// Mostrar campo dirección sólo si es domicilio
checkoutForm.addEventListener('change', () => {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const addressLabel = document.getElementById('address-label');
  const envioRow = document.getElementById('envio-row');
  const deliveryEl = document.getElementById('cart-delivery');
  const totalEl = document.getElementById('cart-total-checkout');

  // Mostrar campo de dirección solo si es domicilio
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // Calcular subtotal
  const subtotal = cart.reduce((s, i) => {
    const extrasSum = (i.extras || []).reduce((x, e) => x + (e.price || 0), 0);
    return s + (i.price + extrasSum) * i.qty;
  }, 0);

  // Calcular envío y total
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar u ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // Actualizar textos
  deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
  totalEl.textContent = `$${numberWithCommas(total)}`;
});





// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name') || '';
  const clientPhone = fd.get('phone') || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address') || '';
  const notes = fd.get('notes') || '';

  let textParts = [];
  textParts.push('🧾 *Nuevo Pedido - Club Sandwich & Juice ✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;
  cart.forEach(c => {
    const extrasList = (c.extras && c.extras.length)
      ? c.extras.map(x => `   ➕ ${x.qty}x ${x.name} ($${numberWithCommas(x.price * x.qty)})`).join('\n')
      : '';
    const removedText = (c.removed && c.removed.length)
      ? (' sin ' + c.removed.join(', '))
      : '';
    const extrasSum = (c.extras || []).reduce((s, e) => s + (e.price * e.qty || 0), 0);
    const itemTotal = (c.price + extrasSum) * c.qty;
    subtotal += itemTotal;

    textParts.push(`${c.qty}x ${c.title}${removedText} — *$${numberWithCommas(itemTotal)}*`);
    if (extrasList) textParts.push(extrasList);
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  if (method === 'domicilio') {
    textParts.push(`🚗 Envío: $${numberWithCommas(delivery)}`);
  } else {
    textParts.push(`🏪 Envío: Sin costo (recoge en el local)`);
  }
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  const msg = encodeURIComponent(textParts.join('\n'));
  const bp = String(BUSINESS_PHONE || '').replace(/[^0-9]/g, '');

  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const waUrl = `https://wa.me/${bp}?text=${msg}`;
  window.open(waUrl, '_blank');
});



// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});
