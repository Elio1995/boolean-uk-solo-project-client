/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useStore from "../store";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProductList from "../components/ProductList";

const StyledPage = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const PinkButton = withStyles(() => ({
  root: {
    height: "50px",
    WebkitBorderRadius: "10px",
    margin: "0",
    marginLeft: "5px",
    borderRadius: 0,
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightPink,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

export default function MainPage(props) {
  const { onAdd, addItemToFavourite } = props;
  // @ts-ignore
  const productList = useStore((state) => state.productList);
  // @ts-ignore
  const setProductList = useStore((state) => state.setProductList);

  useEffect(() => {
    setProductList();
  }, []);

  console.log(productList);

  return (
    <StyledPage>
      <ProductList onAdd={onAdd} addItemToFavourite={addItemToFavourite} />
    </StyledPage>
  );
}
