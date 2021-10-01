/* eslint-disable no-unused-vars */
import useStore from "../store";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { useEffect } from "react";
import { CenterFocusStrong } from "@material-ui/icons";

const StyledImg = styled.img`
  height: 200px;
  width: 200px;
  margin: 30px;
`;

const StyledTitle = styled.h3`
  margin: 10px;
`;

export const MySelectedBook = withStyles(() => ({
  root: {
    margin: "10px",
    padding: "10px",
    width: "100%",
    height: "100vh",
    overflow: "scroll",
    display: "grid",
    gridTemplateRows: "repeat(2, 200px)",
    backgroundColor: APP_COLOR.lightBlue,
    textAlign: "center",
    placeItems: "center",
    // border: "solid 1px",
  },
}))(ToggleButtonGroup);

export default function DetailPage() {
  // @ts-ignore
  const chooseProduct = useStore((state) => state.chooseProduct);

  //   const handleAirport = (e, newProduct) => {
  //     e.preventDefault();
  //     setChooseAirport(newAirport);
  //   };

  //   console.log(chooseAirport);

  return (
    <MySelectedBook>
      <StyledImg src={chooseProduct.image} alt="" />
      <StyledTitle>
        <h2>{chooseProduct.title}</h2>
        <p>{chooseProduct.description}</p>
      </StyledTitle>
    </MySelectedBook>
  );
}

// value={chooseAirport} exclusive onChange={handleAirport}
