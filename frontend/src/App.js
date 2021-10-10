import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { Route, Switch } from "react-router-dom";
//import LoginFormPage from "./components/LoginFormModal";
//import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <nav className="appbody">
      <div className="navigation">
        <Navigation isLoaded={isLoaded} />
      </div>
      <HomePage />
      {/* {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )} */}
    </nav>
  );
}

export default App;
