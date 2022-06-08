import React, { Component, useState } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//! Provider
//! Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };
  handleDetail = () => {
    console.log("handleDetail");
  };
  addToCart = () => {
    console.log("hello from cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state, //! spread operator
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
