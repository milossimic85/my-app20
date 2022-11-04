import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import WelcomePage from "./pages/WelcomePage";
import StartPage from "./pages/StartPage";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/start">
          <StartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
