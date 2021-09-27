import React from "react";
import useStore from "./store";
import "./App.css";
import "./index.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NoLoggedInHeader from "./components/NoLoggedInHeader";
import ModalContainer from "./modals/ModalContainer";
import LoginHeader from "./components/LoginHeader";
import { ImageOpenPage } from "./components/ImageOpenPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import FavouritePage from "./pages/FavouritePage";
import CartPage from "./pages/CartPage";

function App() {
  // @ts-ignore
  const loggedInUser = useStore((state) => state.loggedInUser);

  console.log("here");
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <ImageOpenPage />
        </Route> */}

        <Route path="/" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <MainPage />
        </Route>
        <Route path="/detail-page" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <DetailPage />
        </Route>
        <Route path="/favourites" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <FavouritePage />
        </Route>
        <Route path="/cart" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <CartPage />
        </Route>
      </Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
