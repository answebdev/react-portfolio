import React, { useContext } from 'react';
import './Toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className='toggle'>
      <img src={Sun} alt='' className='toggle-icon' />
      <img src={Moon} alt='' className='toggle-icon' />
      <div
        className='toggle-button'
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25, transition: '0.5s' }}
      ></div>
    </div>
  );
};

export default Toggle;
