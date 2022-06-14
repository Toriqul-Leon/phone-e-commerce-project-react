import React, { Component, useState } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//! Provider
//! Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    modalOpen: true,
    modalProduct: detailProduct,
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getItem = (id) => {
    //! getItem is a method
    const product = this.state.products.find((item) => item.id === id); //! find is a method
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(
      () => {
        //! setState is a method
        return { detailProduct: product };
      } //! setState is a method
    );
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          cartSubTotal: this.state.cartSubTotal + price,
          cartTax: this.state.cartTax + price * 0.1,
          cartTotal: this.state.cartTotal + price,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state, //! spread operator
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
