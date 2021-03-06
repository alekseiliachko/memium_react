import React, { useEffect } from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { Box, Container, Divider, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { fetchArticlesByAccountId } from "../redux/article/actions";
import { MyArticlesList } from "../components/MyArticlesList";
import { useLazyUserData } from "../redux/user/hooks";

const useStyles = makeStyles(() => ({
  articleView: {
    marginTop: "70px",
    marginBottom: "70px",
  },
  comments: {
    marginTop: "30px",
  },
}));

export const AuthorsArticlesPage = () => {
  const classes = useStyles();
  const { authorId } = useParams();
  const authorData = useLazyUserData(authorId);
  const [data, setData] = React.useState();

  useEffect(async () => {
    const newData = await fetchArticlesByAccountId(authorId);
    setData(newData);
  }, [authorId]);

  return (
    <div className="authors-article-page">
      <AppHeaderContainer />
      <Container className={classes.articleView}>
        <Box my={5}>
          <Typography variant="h4">
            Статьи автора: {authorData && authorData.name}{" "}
          </Typography>
          <Divider />
        </Box>
        {data && <MyArticlesList articles={data} />}
      </Container>
    </div>
  );
};
