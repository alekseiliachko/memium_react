import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loadMyArticles } from "../../redux/user/actions";
import { Box, Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

export const MyArticlesList = () => {
  const dispatch = useDispatch();
  const myArticles = useSelector((store) => store.userReducer.myArticles);

  useEffect(async () => {
    dispatch(loadMyArticles());
  }, []);

  const classes = useStyles();

  return <Box></Box>;
};
