import React from 'react';
import '../assets/styles/components/Carousel.scss';

function Carousel({ children }) {
  return (
    <React.Fragment>
      <section className='carousel'>
        <div className='carousel__container'>{children}</div>
      </section>
    </React.Fragment>
  );
}

export { Carousel };
