import { useContext } from 'react';
import { ThemeContext } from './context';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import Toggle from './components/Toggle/Toggle';
import './App.css';

// Video: https://www.youtube.com/watch?v=hQjlM-8C4Ps&t=1s
// Email.js Section starts at around: 1:01:45
// Code: https://github.com/safak/youtube/tree/react-portfolio-website
// CSS Clip-Path Maker: https://bennettfeely.com/clippy/

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222222' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
      }}
    >
      <Toggle />
      <Introduction />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
