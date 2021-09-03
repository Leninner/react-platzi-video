import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Categorias } from '../components/Categorias';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/CarouselItem';
import { Footer } from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  // const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist?.length > 0 && (
        <Categorias title='My list'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categorias>
      )}

      <Categorias title='Tendencias'>
        <Carousel>
          {videos.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categorias>

      <Categorias title='Últimos Éxitos'>
        <Carousel>
          {videos.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categorias>
      <Footer />
    </div>
  );
};

export { App };
