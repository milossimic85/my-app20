import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import WelcomePage from "./pages/WelcomePage";
import StartPage from "./pages/StartPage";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { db, auth } from "./components/firebase/FirebaseInit";
import { useContext } from "react";
import AuthContext from "./components/store/auth-context";
function App() {
  const AuthCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/login">
          {AuthCtx.isLogged && <LoginPage />}
          {!AuthCtx.isLogged && <Redirect to="/" />}
        </Route>
        <Route path="/start">
          {AuthCtx.isLogged && <StartPage />}
          {!AuthCtx.isLogged && <Redirect to="/" />}
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
