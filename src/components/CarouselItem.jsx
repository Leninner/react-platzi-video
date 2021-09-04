import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import add from '../assets/static/icons8-plus-64.png';
import play from '../assets/static/icons8-play-64.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={play} alt='Play Icon' />
          <img className='carousel-item__details--img' src={add} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {year} {contentRating} {duration} minutos
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export { CarouselItem };
