import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Style.modules/Header.module.css';
import Dogs from '../Assets/dogs.svg?react';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/Login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;