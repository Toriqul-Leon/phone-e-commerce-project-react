import React, { useState } from "react";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

const ProductList = () => {
  const [products, setProducts] = useState(storeProducts);
  console.log(products);
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products"></Title>
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return <h1>{value}</h1>;
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
      {/* <Product /> */}
    </div>
  );
};

export default ProductList;
