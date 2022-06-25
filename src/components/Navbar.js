import React from 'react';
import Logo from '../assets/svg/Logo';
import SearchIcon from '../assets/svg/SearchIcon';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className='nav'>
      <div className='nav__main__topcontainer'>
        <nav className='nav__main'>
          <div className='navigation'>
            <ul className='navigation'>
              {' '}
              <NavLink className={({ isActive }) => (isActive ? 'navigation__link--active' : null)} to='/'>
                <li>Recipes</li>
              </NavLink>
              <li>Learn</li>
              <li>Macro Calculator</li>
            </ul>
          </div>

          <div className='logo'>
            <Logo />
          </div>

          <div className='section__user'>
            <div className='section__user__container'>
              <button className='button__search'>
                <SearchIcon />
              </button>
              <button className='button__signin'>Sign In</button>
              <button className='button__signup'> Join</button>
            </div>
          </div>
        </nav>
      </div>
      <nav className='sub__nav'>
        <ul>
          <li style={location.pathname == '/' ? { background: '#000', height: '100%', color: '#fff' } : null}>Collections</li>
          <li>Featured</li>
          <li>Find A Recipe</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
