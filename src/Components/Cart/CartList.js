import React from "react";
import CartItem from "./CartItem";
import { useProductContext } from "../../context";

const CartList = () => {
  const { cart } = useProductContext();

  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CartList;
