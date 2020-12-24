import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { useParams } from "react-router";
import { ArticleView } from "../components/ArticleView/ArticleView";
import { useSelector } from "react-redux";
import { AuthorSummary } from "../components/AuthorSummary/AuthorSummary";
import { CommentsCenter } from "../components/CommentsCenter/CommentsCenter";
import { Container, Divider } from "@material-ui/core";
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

export const ArticleViewPage = () => {
  const classes = useStyles();
  const { articleId } = useParams();
  const authorId = useSelector(
    (store) => store.articleReducer.articleDataById[articleId]?.authorId
  );

  return (
    <div className="article-view-page">
      <AppHeaderContainer />
      {authorId && <AuthorSummary articleId={articleId} authorId={authorId} />}
      <Container maxWidth="sm" className={classes.articleView}>
        <ArticleView articleId={articleId} />
        <Divider />
        <div className={classes.comments}>
          <CommentsCenter articleId={articleId} />
        </div>
      </Container>
    </div>
  );
};
