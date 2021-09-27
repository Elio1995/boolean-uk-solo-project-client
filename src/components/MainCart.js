import React from "react";
import useStore from "../store";
import { useEffect } from "react";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ProductList from "./ProductList";

const StyledImg = styled.img`
  height: 100px;
  width: 100px;
`;

const PinkButton = withStyles(() => ({
  root: {
    margin: "5px",
    marginLeft: "5px",
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightBlue,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

const StyledList = styled.button`
  font-size: 12px;
  font-family: "roboto";
  color: ${APP_COLOR.black};
  margin: 30px;
  padding: 50px;
  border: solid 0.2px ${APP_COLOR.lightBlue};
  border-radius: 3px;
`;

export default function MainCart(props) {
  const { onAdd } = props;

  // @ts-ignore
  const productList = useStore((state) => state.productList);
  // @ts-ignore
  const setProductList = useStore((state) => state.setProductList);

  useEffect(() => {
    setProductList();
  }, []);

  return (
    <>
      <div className="block col-2">
        <ProductList
          // @ts-ignore
          onAdd={onAdd}
        />
        <div className="row"></div>
      </div>
    </>
  );
}
