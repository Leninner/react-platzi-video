import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {
  const mainTitle = '¿Qué quieres ver hoy?';
  return (
    <section className='main'>
      <h2 className='main__title'>{mainTitle}</h2>
      <input type='text' className='input' placeholder='Buscar...' />
    </section>
  );
};

export { Search };
