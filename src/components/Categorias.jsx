import React from 'react';
import '../assets/styles/components/Categorias.scss';

const Categorias = ({ children, title }) => {
  return (
    <div className='categories'>
      <h3 className='categories__title'>{title}</h3>
      {children}
    </div>
  );
};

export { Categorias };
