import React from "react";
import styled from "styled-components";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title name="your" title="cart"></Title>
                <CartColumns></CartColumns>
                <CartList value={value}></CartList>
              </>
            );
          } else {
            return <EmptyCart></EmptyCart>;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
