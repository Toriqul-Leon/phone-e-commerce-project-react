import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, company, img, info, price, title, inCart } =
          value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 ">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model: {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>price:</strong> ${price}
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  {" "}
                  some info about product
                </p>
                <p className="text-muted lead">{info}</p>
                <div>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    onClick={() => {
                      value.addToCart(id);
                    }}
                    cart
                    disabled={inCart ? true : false}
                  >
                    {" "}
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
