import React from 'react';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Categorias } from '../components/Categorias';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/CarouselItem';
import { Footer } from '../components/Footer';
import '../assets/styles/App.scss';
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categorias title='My list'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categorias>
      )}

      <Categorias title='Tendencias'>
        <Carousel>
          {initialState.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categorias>

      <Categorias title='Últimos Éxitos'>
        <Carousel>
          {initialState.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categorias>
      <Footer />
    </div>
  );
};

export { App };
