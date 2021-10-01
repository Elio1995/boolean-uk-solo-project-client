/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../App.css";
import "../index.css";
import BasketCart from "../components/BasketCart";
// @ts-ignore
import MainCart from "../components/MainCart";
// @ts-ignore
import MainPage from "./MainPage";
import useStore from "../store";

export default function CartPage(props) {
  // @ts-ignore
  const { onAdd, onRemove, total, setTotal, cartItems } = props;
  // @ts-ignore
  const cart = useStore((store) => store.cart);
  // @ts-ignore
  const setCart = useStore((store) => store.setCart);
  // @ts-ignore
  const productList = useStore((store) => store.productList);
  // @ts-ignore
  const addToCart = useStore((store) => store.addToBasket);
  // @ts-ignore
  const decreaseQuantity = useStore((store) => store.decreaseQuantity);
  // @ts-ignore
  const removeCartItem = useStore((store) => store.removeCartItem);
  // @ts-ignore
  const loggedinUser = useStore((store) => store.loggedinUser);

  return (
    <>
      <MainCart onAdd={onAdd} />
      <BasketCart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    </>
    // <section className="basket-container">
    //   <h2>Your Basket</h2>
    //   <div className="discount-info">
    //     <h3 className="total-info-h3">
    //       {total < 25
    //         ? `Spend £${(25 - total).toFixed(2)} more and get free standard
    //         delivery.`
    //         : "Congrats, you’ve got free UK standard delivery"}
    //     </h3>
    //   </div>
    //   <ul>
    //     {cart &&
    //       cart.products.map((cartedItem) => (
    //         <BasketCart
    //           product={productList.find(
    //             (product) => cartedItem.itemId === product.id
    //           )}
    //           cartedItem={cartedItem}
    //           addToCart={addToCart}
    //           decreaseQuantity={decreaseQuantity}
    //           removeCartItem={removeCartItem}
    //           key={cartedItem.id}
    //         />
    //       ))}
    //   </ul>
    //   <h3 className="total-display">Total: £{total.toFixed(2)}</h3>
    //   {/* <div className="pay-btn-wrapper">
    //     <Modal
    //       buttonLabel={
    //         <button onClick={hadlePlaceOrderBtn} className="pay-button">
    //           Place order
    //         </button>
    //       }
    //     >
    //       <span className="product-title">Order has been placed</span>
    //     </Modal>
    //   </div> */}
    // </section>
  );
}
