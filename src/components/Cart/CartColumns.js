import React from "react";

const CartColumns = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <div className="cart-column">
              <h5 className="text-uppercase">products</h5>
            </div>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <div className="cart-column">
              <h5 className="text-uppercase">name</h5>
            </div>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <div className="cart-column">
              <h5 className="text-uppercase">price</h5>
            </div>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <div className="cart-column">
              <h5 className="text-uppercase">quantity</h5>
            </div>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <div className="cart-column">
              <h5 className="text-uppercase">remove</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
