import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className='product-list'>
      <div className='product-list-text'>
        <h1 className='product-list-title'>Create and inspire. It's Adolf.</h1>
        <p className='product-list-description'>
          This is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles, and a whole lot more
          awaits inside.
        </p>
      </div>
      <div className='p-list'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
