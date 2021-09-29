import React from "react";
import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import logo from "../assets/mainIcon.png";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import useStore from "../store";

const StyledHeader = styled.header`
  background-color: ${APP_COLOR.lightGrey};
  position: fix;
  height: 100px;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 160px 1fr 200px;
  place-items: center;

  .app-logo {
    height: 100px;
  }
  nav {
    place-self: end;
    justify-self: center;
    padding: 15px;
    justify-self: left;
    text-decoration: none;
  }
  .nav-list {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    text-decoration: none;
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: inherit;
    grid-auto-flow: column;
    place-content: space-between;
    nav {
      display: none;
    }
  }
`;

export default function NoLoggedInHeader() {
  const PinkButton = withStyles(() => ({
    root: {
      height: "50px",
      marginLeft: "5px",
      WebkitBorderRadius: "10px",
      margin: "0",
      borderRadius: 0,
      color: APP_COLOR.black,
      backgroundColor: APP_COLOR.lightBlue,
      "&:hover": {
        backgroundColor: APP_COLOR.lightBlue,
      },
    },
  }))(Button);
  // @ts-ignore
  const setModal = useStore((state) => state.setModal);
  return (
    <StyledHeader>
      <img className="app-logo" src={logo}></img>
      <div></div>
      <div>
        <PinkButton onClick={() => setModal("logIn")} variant="contained">
          Login
        </PinkButton>
        <PinkButton onClick={() => setModal("signUp")} variant="contained">
          SignUp
        </PinkButton>
      </div>
    </StyledHeader>
  );
}
