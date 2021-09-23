import React from "react";
import useStore from "../store";
import logo from "../assets/backgroundImage.jpeg";

export function ImageOpenPage() {
  // @ts-ignore
  const modal = useStore((store) => console.log("store", store.modal));

  return (
    <div>
      <img src={logo} height="100%" width="100%" alt=""></img>
    </div>
  );
}
