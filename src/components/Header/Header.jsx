import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { BiCameraMovie } from 'react-icons/bi';

const {
  navMenu,
  logo_link,
  logo,
  logo_icon,
  logo_text,
  navList,
  navItem,
  inactive,
  active,
} = css;

const setActive = ({ isActive }) => (isActive ? active : inactive);

function Header() {
  return (
    <header>
      <nav className={navMenu}>
        <Link to={'/'} className={logo_link}>
          <div className={logo}>
            <BiCameraMovie size={60} className={logo_icon} />
            <p className={logo_text}>Movie/</p>
          </div>
        </Link>

        <ul className={navList}>
          <li className={navItem}>
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
          </li>
          <li className={navItem}>
            <NavLink to="/movies" className={setActive}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// style={({ isActive }) => ({
//   backgroundColor: isActive ? '#b80b0b' : 'transparent',
//   color: isActive ? '#fff' : '#000',
// })}

export default Header;
