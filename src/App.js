import React from "react";
import useStore from "./store";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NoLoggedInHeader from "./components/NoLoggedInHeader";
import ModalContainer from "./modals/ModalContainer";
import LoginHeader from "./components/LoginHeader";
import { ImageOpenPage } from "./components/ImageOpenPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

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
        <Route path="/detail-page">
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <DetailPage />
        </Route>
      </Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
