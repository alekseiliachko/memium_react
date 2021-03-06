import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { MyArticlesList } from "../components/MyArticlesList";
import { Container, Divider, Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  articleView: {
    marginTop: "70px",
    marginBottom: "70px",
  },
  comments: {
    marginTop: "30px",
  },
}));

export const MyArticlesPage = () => {
  const classes = useStyles();
  const myArticles = useSelector((store) => store.userReducer.myArticles);
  return (
    <div className="my-article-page">
      <AppHeaderContainer />
      <Container className={classes.articleView}>
        <Box my={5}>
          <Typography variant="h4">Мои статьи</Typography>
          <Divider></Divider>
        </Box>
        <MyArticlesList articles={myArticles} />
      </Container>
    </div>
  );
};
