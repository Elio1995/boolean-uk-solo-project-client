/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import useStore from "../store";
import { withStyles } from "@material-ui/core/styles";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { APP_COLOR } from "../consistent";
import styled from "styled-components";

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

const StyledList = styled.button`
  font-size: 12px;
  height: 50%;
  font-family: "roboto";
  color: ${APP_COLOR.black};
  margin: 30px;
  border: solid 0.2px ${APP_COLOR.lightBlue};
  border-radius: 3px;
`;

export default function FavouritePage(props) {
  const { removeItemFavourite, favouriteItems } = props;
  // @ts-ignore
  const productList = useStore((store) => store.productList);
  // @ts-ignore
  const loggedInUser = useStore((store) => store.loggedInUser);
  // @ts-ignore
  const findProductById = useStore((store) => store.findProductById);
  // @ts-ignore
  const favouriteProducts = useStore((store) => store.favouriteProducts);
  // @ts-ignore
  const setFavouriteProducts = useStore((store) => store.setFavouriteProducts);

  // useEffect(() => {
  //   if (loggedInUser === null) return;
  //   setFavouriteProducts();
  // }, [loggedInUser]);

  return (
    <>
      <MyList>
        {favouriteItems.map((favouriteItem) => {
          // console.log("PRODUCT", product);
          return (
            <StyledList>
              <div className="favourite-page-card">
                <img
                  height="200px"
                  width="200px"
                  src={favouriteItem.image}
                  className="selected-card-image"
                  alt=""
                ></img>
                <h2>{favouriteItem.title}</h2>
                <h3>{favouriteItem.price}£</h3>

                <button
                  className="remove-button"
                  onClick={() => {
                    removeItemFavourite(favouriteItem);
                  }}
                >
                  X
                </button>
              </div>
            </StyledList>
          );
        })}
      </MyList>
    </>
  );
}
