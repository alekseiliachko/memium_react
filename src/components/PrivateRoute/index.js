import * as React from "react";
import { Redirect, Route } from "react-router";
import { AUTH_STATE } from "../../redux/auth/reducer";

export const PrivateRoute = ({ authState, children, ...rest }) => {
  if (authState === AUTH_STATE.ATTEMPT) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authState === AUTH_STATE.SUCCESS ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
