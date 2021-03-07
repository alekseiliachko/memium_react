import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  circleWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

export const ProgressDecorator = () => {
  const classes = useStyles();
  return (
    <div className={classes.circleWrap}>
      <CircularProgress />
    </div>
  );
};
