import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import add from '../assets/static/icons8-plus-64.png';
import play from '../assets/static/icons8-play-64.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div class='carousel-item'>
      <img class='carousel-item__img' src={cover} alt={title} />
      <div class='carousel-item__details'>
        <div>
          <img class='carousel-item__details--img' src={play} alt='Play Icon' />
          <img class='carousel-item__details--img' src={add} alt='Plus Icon' />
        </div>
        <p class='carousel-item__details--title'>{title}</p>
        <p class='carousel-item__details--subtitle'>
          {year} {contentRating} {duration} minutos
        </p>
      </div>
    </div>
  );
};

export { CarouselItem };
