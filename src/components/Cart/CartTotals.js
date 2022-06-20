import React from "react";
import { Link } from "react-router-dom";
import Paypal from "./Paypal";
const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, cart, clearCart } = value;

  const emptyCart = cart.length === 0 ? true : false;
  return (
    <>
      {!emptyCart && (
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  clear cart
                </button>
              </Link>
              <h5>
                <span className="text-title"> subtotal :</span>{" "}
                <strong>$ {cartSubTotal} </strong>
              </h5>
              <h5>
                <span className="text-title"> tax :</span>{" "}
                <strong>$ {cartTax} </strong>
              </h5>
              <h5>
                <span className="text-title"> total :</span>{" "}
                <strong>$ {cartTotal} </strong>
              </h5>
            </div>
            <Paypal total={cartTotal} clearCart={clearCart} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartTotals;
