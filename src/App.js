import "./App.css";
import { Switch, Route } from "react-router-dom";
import NoLoggedInHeader from "./components/noLoggedInHeader";
import ModalContainer from "./modals/ModalContainer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <NoLoggedInHeader />
        </Route>
      </Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
