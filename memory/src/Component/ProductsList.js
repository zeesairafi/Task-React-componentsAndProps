import React from 'react';
import memoriesData from '../Memories';
import Product from './Product';

function ProductsList() {
    let arrayData = memoriesData.map((product)=> <Product memoriesData={product}/>)
  return <div>
      {arrayData}
     
  </div>;
}

export default ProductsList;
