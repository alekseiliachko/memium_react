import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "../redux/reducer";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { restoreSessionAttempt } from "../redux/auth/actions";
import { PrivateRouteContainer } from "../containers/PrivateRouteContainer";
import { HomePage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

const store = configureStore();

const App = () => {
  useEffect(() => {
    store.dispatch(restoreSessionAttempt());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRouteContainer path="/home">
            <HomePage />
          </PrivateRouteContainer>
          <PrivateRouteContainer path="/profile">
            <ProfilePage />
          </PrivateRouteContainer>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
