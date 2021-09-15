import styled from "styled-components";
import logo from "../assets/booleanAir_logo.png";
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

const NavButton = withStyles(() => ({
  root: {
    height: "40px",

    margin: "0",
    borderRadius: 0,
    color: APP_COLOR.black,
    "&:hover": {
      color: APP_COLOR.grey,
    },
  },
}))(Button);

export const PinkButton = withStyles(() => ({
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

export default function LoginHeader() {
  //   const logOut = useStore((state) => state.logOut);
  //   const loggedInUser = useStore((state) => state.loggedInUser);
  const history = useHistory();

  //   useEffect(() => {
  //     if (loggedInUser && loggedInUser.role === "STAFF") {
  //       history.push("/staffpage");
  //     }
  //   }, []);

  return (
    <StyledHeader>
      <img className="app-logo" src={logo}></img>
      <nav>
        <ul className="nav-list">
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <NavButton onClick={() => history.push("/")}>Buy Ticket</NavButton>
            <NavButton onClick={() => history.push("/flightStatus")}>
              Flight Status
            </NavButton>
            <NavButton onClick={() => history.push("/myBooking")}>
              Check In
            </NavButton>
          </ButtonGroup>
        </ul>
      </nav>
      <div>
        <PinkButton
          variant="contained"
          onClick={() => history.push("/myBooking")}
        >
          My Flight
        </PinkButton>

        <Link to="/">
          <PinkButton variant="contained">LogOut</PinkButton>
        </Link>
      </div>
    </StyledHeader>
  );
}
