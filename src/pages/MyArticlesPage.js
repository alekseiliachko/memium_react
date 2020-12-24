import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { MyArticlesList } from "../components/MyArticlesList";
import { Container, Divider, Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

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
  return (
    <div className="my-article-page">
      <AppHeaderContainer />
      <Box my={5} px={5}>
        <Typography variant="h4">Мои статьи</Typography>
        <Divider></Divider>
      </Box>
      <Container maxWidth="sm" className={classes.articleView}>
        <MyArticlesList />
      </Container>
    </div>
  );
};
