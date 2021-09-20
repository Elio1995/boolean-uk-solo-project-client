import React from "react";
import styled from "styled-components";
import logo from "../assets/shopCart.png";
import { APP_COLOR } from "../consistent";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link, useHistory } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: ${APP_COLOR.pink};
  position: fix;
  height: 100px;
  display: grid;
  padding: 0 20px;
  grid-template-columns: 160px 1fr 250px;
  place-items: center;

  .app-logo {
    height: 100px;
  }
  nav {
    place-self: end;
    justify-self: center;
    padding: 15px;
    justify-self: left;
  }
  .nav-list {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
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
  const PinkButton = withStyles(() => ({
    root: {
      height: "50px",
      WebkitBorderRadius: "10px",
      margin: "5px",
      marginLeft: "5px",
      borderRadius: 0,
      color: APP_COLOR.black,
      backgroundColor: APP_COLOR.lightPink,
      "&:hover": {
        backgroundColor: APP_COLOR.lightGrey,
      },
    },
  }))(Button);
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

      <div>
        <PinkButton variant="contained">My Favourites</PinkButton>
        <PinkButton variant="contained">My Basket</PinkButton>

        <Link to="/">
          <PinkButton variant="contained">LogOut</PinkButton>
        </Link>
      </div>
    </StyledHeader>
  );
}
