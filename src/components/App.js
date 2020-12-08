import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "../redux/reducer";
import { LoginPage, SignupPage } from "../pages";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
