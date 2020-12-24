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
import { ArticleViewPage } from "../pages/ArticleViewPage";
import { ArticleCreationPage } from "../pages/ArticleCreationPage";
import { LOADING_STATUS } from "../redux/user/reducer";
import { loadDetails } from "../redux/user/actions";
import { Redirect } from "react-router";
import { SearchPage } from "../pages/SearchPage";

require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

const store = configureStore();

const App = () => {
  useEffect(() => {
    store.dispatch(restoreSessionAttempt());
    store.dispatch(loadDetails());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRouteContainer path="/article/:articleId">
            <ArticleViewPage />
          </PrivateRouteContainer>
          <PrivateRouteContainer path="/new-article">
            <ArticleCreationPage />
          </PrivateRouteContainer>
          <PrivateRouteContainer path="/home">
            <HomePage />
          </PrivateRouteContainer>
          <PrivateRouteContainer path="/profile">
            <ProfilePage />
          </PrivateRouteContainer>
          <PrivateRouteContainer path="/search">
            <SearchPage />
          </PrivateRouteContainer>
          <Route path="*" render={() => <Redirect to="/home" />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
