import styled from "styled-components";
import { APP_COLOR } from "../consistent";
import logo from "../assets/shopCart.png";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import useStore from "../store";

const StyledHeader = styled.header`
  background-color: ${APP_COLOR.pink};
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

const PinkButton = withStyles(() => ({
  root: {
    height: "50px",
    marginLeft: "5px",
    WebkitBorderRadius: "10px",
    margin: "0",
    borderRadius: 0,
    color: APP_COLOR.black,
    backgroundColor: APP_COLOR.lightPink,
    "&:hover": {
      backgroundColor: APP_COLOR.lightGrey,
    },
  },
}))(Button);

export default function NoLoggedInHeader() {
  // @ts-ignore
  const setModal = useStore((state) => state.setModal);
  return (
    <StyledHeader>
      <img className="app-logo" src={logo}></img>
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
