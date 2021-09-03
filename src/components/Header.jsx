import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logoPlatzi.png';
import userIcon from '../assets/static/icons8-google-plus-50.png';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src={logo} alt='Platzi Video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
