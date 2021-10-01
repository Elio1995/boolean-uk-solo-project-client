/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import useStore from "../store";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Container from "@material-ui/core/Container";

import Link from "@material-ui/core/Link";
import { createPropertySignature } from "typescript";

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

export const MyToggleList = withStyles(() => ({
  root: {
    margin: "10px",
    padding: "10px",
    overflow: "scroll",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}))(ToggleButtonGroup);

export const MyToggleButton = withStyles(() => ({
  root: {
    height: "50px",
    fontSize: "12px",
    WebkitBorderRadius: "10px",
    margin: "5px",
    padding: "50px",
    borderRadius: 0,
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightBlue,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(ToggleButton);

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
}))(Container);

export default function ProductList(props) {
  const { addItemToFavourite } = props;
  // @ts-ignore
  const { onAdd } = props;
  // @ts-ignore
  const setModal = useStore((state) => state.setModal);
  // @ts-ignore
  const chooseProduct = useStore((state) => state.chooseProduct);
  // @ts-ignore
  const setChooseProduct = useStore((state) => state.setChooseProduct);
  // @ts-ignore
  const productList = useStore((state) => state.productList);
  // @ts-ignore
  const setProductList = useStore((state) => state.setProductList);
  // @ts-ignore
  const loggedInUser = useStore((state) => state.loggedInUser);
  // @ts-ignore
  const addToCart = useStore((state) => state.addToCart);

  const history = useHistory();

  useEffect(() => {
    setProductList();
  }, []);

  useEffect(() => {
    if (chooseProduct) {
      history.push("/detail-page");
    }
  }, [chooseProduct, history]);

  //   const handleAirport = (e, newProduct) => {
  //     e.preventDefault();

  //     setChooseAirport(newAirport);
  //   };

  //   console.log(chooseAirport);

  const handleProduct = (e, newProduct) => {
    setChooseProduct(newProduct);
  };

  console.log(chooseProduct);

  return (
    <MyList>
      {productList?.map((product) => {
        return (
          <StyledList>
            <StyledImg
              onClick={() => {
                setChooseProduct(product);
              }}
              src={product.image}
              alt=""
            />
            <h2>{product.title}</h2>
            <h2>{product.price}£</h2>
            {/* <PinkButton>Add to my favourites</PinkButton> */}
            {/* <PinkButton onClick={() => onAdd(product)}>Add To Cart</PinkButton> */}

            <div>
              {/* <MyToggleList
                value={chooseProduct}
                exclusive
                onChange={handleProduct}
              > */}
              {
                loggedInUser ? (
                  <PinkButton
                    onClick={() => addItemToFavourite(product)}
                    className="product-button"
                  >
                    Add to my favourites
                  </PinkButton>
                ) : (
                  ""
                )
                // <Link onClick={() => setModal("signUp")}>
                //   Not our member yet? Sign Up
                // </Link>
              }
              {/* </MyToggleList> */}
            </div>
          </StyledList>
        );
      })}
    </MyList>
  );
}

// value={chooseAirport} exclusive onChange={handleAirport}
