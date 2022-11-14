import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import StartPage from "./pages/StartPage";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { db, auth } from "./components/firebase/FirebaseInit";
import { useContext } from "react";
import AuthContext from "./components/store/auth-context";
import TablePage from "./pages/TablePage";
import TablePage2 from "./pages/TablePage2";
function App() {
  const history = useHistory();
  const [isLog, setIsLog] = useState(false);
  const AuthCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
          {AuthCtx.isLogged && <Redirect to="/login" />}"
        </Route>

        <Route path="/login">{AuthCtx.isLogged && <LoginPage />}</Route>

        <Route path="/start">
          {AuthCtx.isLogged && <StartPage />}
          {!AuthCtx.isLogged && <Redirect to="/start" />}
        </Route>
        <Route path="/table">
          {AuthCtx.isLogged && <TablePage />}
          {!AuthCtx.isLogged && <Redirect to="/table" />}
        </Route>
        <Route path="/table2">
          {AuthCtx.isLogged && <TablePage2 />}
          {!AuthCtx.isLogged && <Redirect to="/table2" />}
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
