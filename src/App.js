// import logo from './logo.svg';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/Contact';
import './App.css';

// Video: https://www.youtube.com/watch?v=hQjlM-8C4Ps&t=1s
// Code: https://github.com/safak/youtube/tree/react-portfolio-website
// CSS Clip-Path Maker: https://bennettfeely.com/clippy/

const App = () => {
  return (
    <div>
      <Introduction />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
