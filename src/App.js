import React from "react";
import useStore from "./store";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NoLoggedInHeader from "./components/NoLoggedInHeader";
import ModalContainer from "./modals/ModalContainer";
import LoginHeader from "./components/LoginHeader";
import { Hello } from "./components/Hello";

function App() {
  // @ts-ignore
  const loggedInUser = useStore((state) => state.loggedInUser);
  console.log("here");
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <Hello />
        </Route>
      </Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
