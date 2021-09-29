import React from "react";
import styled from "styled-components";
import logo from "../assets/mainIcon.png";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link, useHistory } from "react-router-dom";
import useStore from "../store";

const StyledHeader = styled.header`
  background-color: ${APP_COLOR.lightGrey};
  position: fix;
  height: 100px;
  width: 100vw;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 160px 1fr 450px;
  place-items: center;

  .app-logo {
    height: 100px;
  }
  nav {
    place-self: end;
    justify-self: center;
    padding: 5px;
    justify-self: left;
  }
  .nav-list {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
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

export default function LoginHeader() {
  const BlueButton = withStyles(() => ({
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
  const logOut = useStore((state) => state.logOut);
  // @ts-ignore
  const setFavouriteProducts = useStore((store) => store.setFavouriteProducts);
  const history = useHistory();

  //   const logOut = useStore((state) => state.logOut);
  //   const loggedInUser = useStore((state) => state.loggedInUser);
  // const history = useHistory();

  //   useEffect(() => {
  //     if (loggedInUser && loggedInUser.role === "STAFF") {
  //       history.push("/staffpage");
  //     }
  //   }, []);

  return (
    <StyledHeader>
      <img className="app-logo" src={logo}></img>
      <div></div>
      <div>
        <Link to="/favourites">
          <BlueButton
            onClick={() => {
              setFavouriteProducts();
            }}
            variant="contained"
          >
            My Favourites
          </BlueButton>
        </Link>
        <Link to="/cart">
          <BlueButton variant="contained">My Basket</BlueButton>
        </Link>
        <Link to="/">
          <BlueButton onClick={logOut} variant="contained">
            LogOut
          </BlueButton>
        </Link>
      </div>
    </StyledHeader>
  );
}
