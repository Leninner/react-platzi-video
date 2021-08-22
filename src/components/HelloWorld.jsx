import React from 'react';
import '../assets/styles/App.scss'; // Referencia a los estilos

const HelloWorld = () => (
  <section>
    <h1>Hola Mundo!</h1>
    <p>Hola, mi nombre es Lenin</p>
  </section> // NOTE: En JSX debemos añadir etiquetas dentro un elemento padre. No se puede añadir etiquetas independientes.
);

export default HelloWorld;
