import React from "react";
import { useProductContext } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
const Cart = (props) => {
  const { cart } = useProductContext();
  return (
    <section>
      {(cart.length > 0 && (
        <>
          <Title name="your" title="card" />
          <CartColumns />
          <CartList />
          <CartTotals history={props.history} />
        </>
      )) || <EmptyCart />}
    </section>
  );
};

export default Cart;
