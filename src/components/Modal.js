import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal, modalProduct } = value;
        const { img, title, price } = modalProduct;
        if (!modalOpen) {
          return null;
        }
        return (
          <ModalContainer>
            <div className="container">
              <div className="row">
                <div
                  id="modal"
                  className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                >
                  <h5>item added to the cart</h5>
                  <img src={img} className="img-fluid" alt="product" />
                  <h5>{title}</h5>
                  <h5 className="text-muted">price: ${price}</h5>

                  <Link to="/">
                    <ButtonContainer
                      onClick={closeModal}
                      className="btn btn-outline-danger text-capitalize mx-2"
                    >
                      Store
                    </ButtonContainer>
                  </Link>
                  <Link to="/cart">
                    <ButtonContainer
                      onClick={closeModal}
                      cart
                      className="btn btn-outline-success text-capitalize mx-2"
                    >
                      go to cart
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContainer>
        );
      }}
    </ProductConsumer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    padding: 3rem;
    border-radius: 0.5rem;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 10rem;
    @media (max-width: 576px) {
      margin-top: 5rem;
    }
  }
`;

export default Modal;
