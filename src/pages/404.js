import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  circleWrap: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  goHome: {
    color: "blue",
    cursor: "pointer",
  },
}));

export const NotFound = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.circleWrap}>
      <Typography variant="h4">404</Typography>
      <Typography variant="h5">Страница не найдена</Typography>
      <Typography
        onClick={() => history.push("/home")}
        className={classes.goHome}
        variant="h5"
      >
        Домой
      </Typography>
    </div>
  );
};
