import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { useParams } from "react-router";
import { ArticleView } from "../components/ArticleView/ArticleView";
import { useSelector } from "react-redux";
import { AuthorSummary } from "../components/AuthorSummary/AuthorSummary";

export const ArticleViewPage = () => {
  const { articleId } = useParams();
  const authorId = useSelector(
    (store) => store.articleReducer.articleDataById[articleId]?.authorId
  );

  return (
    <div className="article-view-page">
      <AppHeaderContainer />
      <ArticleView articleId={articleId} />
      {authorId && <AuthorSummary articleId={articleId} authorId={authorId} />}
    </div>
  );
};
