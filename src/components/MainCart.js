/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import useStore from "../store";
import { useEffect } from "react";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ProductList from "./ProductList";

const StyledImg = styled.img`
  height: 100px;
  width: 100px;
`;

export const MyList = withStyles(() => ({
  root: {
    margin: "10px",
    padding: "10px",
    width: "100vw",
    height: "100vh",
    overflow: "scroll",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    backgroundColor: APP_COLOR.lightBlue,
  },
}))(ToggleButtonGroup);

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
  // @ts-ignore
  const loggedInUser = useStore((state) => state.loggedInUser);

  useEffect(() => {
    setProductList();
  }, []);

  return (
    <>
      <MyList>
        {productList?.map((product) => {
          return (
            <StyledList>
              <StyledImg src={product.image} alt="" />
              <h2>{product.title}</h2>
              <h2>{product.price}£</h2>
              <PinkButton
                onClick={() => onAdd(product)}
                className="product-button"
              >
                Add To Cart
              </PinkButton>
              {/* <PinkButton>Add to my favourites</PinkButton> */}
              {/* <PinkButton onClick={() => onAdd(product)}>Add To Cart</PinkButton> */}
              {/* <div>
                {
                  loggedInUser ? (
                    <PinkButton
                      // @ts-ignore
                      // onClick={() => addToCart(product)}
                      className="product-button"
                    >
                      Add To Cart
                    </PinkButton>
                  ) : (
                    ""
                  )
                  // <Link onClick={() => setModal("signUp")}>
                  //   Not our member yet? Sign Up
                  // </Link>
                }
              </div> */}
            </StyledList>
          );
        })}
      </MyList>

      {/* <div className="block col-2">
        <ProductList
          // @ts-ignore
          onAdd={onAdd}
        />
        <div className="row"></div>
      </div> */}
    </>
  );
}
