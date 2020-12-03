import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
const ProductList = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products"></Title>
          <div className="row">
            <ProductConsumer>
              {({ products }) => {
                return products.map((product) => {
                  return <Product {...product} key={product.id} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
