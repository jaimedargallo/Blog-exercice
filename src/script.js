// Creamos un nuevo parrafo
const welcomeH2 = document.createElement('p');

// Creamos texto para el parrafo
const welcome = document.createTextNode('Welcome to '); 

// Agrega el texto al parrafo
welcomeH2.appendChild(welcome);

// Agregar un nuevo atributo de clase
welcomeH2.setAttribute('class', 'texto');

// Seleccionar contenedor
const container = document.getElementsByClassName('titulo-Blog')[0];

// Agregar el nuevo parrafo dentro del contenedor
container.appendChild(welcomeH2);
