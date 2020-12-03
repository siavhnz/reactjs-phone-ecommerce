import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {({ modalOpen, closeModal, modalProduct }) => {
        const { img, title, price } = modalProduct;

        return (
          modalOpen && (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto py-4 col-md-6 col-lg-4 text-center text-capitalize"
                  >
                    <h5>item added to the cart</h5>
                    <img src={img} className="img-fluid" alt="" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price: $ {price}</h5>
                    <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>
                        store
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                        go to cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          )
        );
      }}
    </ProductConsumer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: felx;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 1s linear;
  #modal {
    background: var(--mainWhite);
  }
`;
