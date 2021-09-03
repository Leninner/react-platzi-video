import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Categorias } from '../components/Categorias';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/CarouselItem';
import { Footer } from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />
      <Categorias title='Mi Lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categorias>

      <Categorias title='Más Reproducidos'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categorias>

      <Categorias title='Últimos Éxitos'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categorias>
      <Footer />
    </div>
  );
};

export { App };
