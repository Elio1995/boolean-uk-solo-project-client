import React from "react";
import useStore from "../store";
export function Hello() {
  // @ts-ignore
  const modal = useStore((store) => console.log("store", store.modal));

  return (
    <div>
      <h2>hello</h2>
      <img
        src="https://image.shutterstock.com/image-photo/ecommerce-add-cart-online-shopping-260nw-1139994800.jpg"
        alt=""
      ></img>
    </div>
  );
}
