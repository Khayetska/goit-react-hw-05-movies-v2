import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { BiCameraMovie } from 'react-icons/bi';

const { navMenu, logo, logo_icon, logo_text, navList, navItem, nav_link } = css;

function Header() {
  return (
    <>
      <nav className={navMenu}>
        <div className={logo}>
          <BiCameraMovie size={60} className={logo_icon} />
          <p className={logo_text}>Movie/</p>
        </div>

        <ul className={navList}>
          <li className={navItem}>
            <NavLink to="/" className={nav_link}>
              Home
            </NavLink>
          </li>
          <li className={navItem}>
            <NavLink to="/movies" className={nav_link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
