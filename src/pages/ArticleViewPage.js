import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { useParams } from "react-router";
import { ArticleViewContainer } from "../containers/ArticleViewContainer";

export const ArticleViewPage = () => {
  let { articleId } = useParams();

  return (
    <div className="article-view-page">
      <AppHeaderContainer />
      <ArticleViewContainer articleId={articleId} />
    </div>
  );
};
