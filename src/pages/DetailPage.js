/* eslint-disable no-unused-vars */
import useStore from "../store";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { useEffect } from "react";

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

export const MySelectedBook = withStyles(() => ({
  root: {
    margin: "10px",
    padding: "10px",
    width: "300px",
    height: "400px",
    overflow: "scroll",
    display: "grid",
    gridTemplateRows: "repeat(3, 80px)",
    backgroundColor: APP_COLOR.lightBlue,
    border: "solid 1px",
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
      <h2>{chooseProduct.title}</h2>
      <p>{chooseProduct.description}</p>
    </MySelectedBook>
  );
}

// value={chooseAirport} exclusive onChange={handleAirport}
