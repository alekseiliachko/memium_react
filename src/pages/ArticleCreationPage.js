import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { ArticleCreator } from "../components/ArticleCreator/ArticleCreator";

export const ArticleCreationPage = () => {
  const { articleId } = useParams();
  const authorId = useSelector(
    (store) => store.articleReducer.articleDataById[articleId]?.authorId
  );

  return (
    <div>
      <AppHeaderContainer />
      <ArticleCreator />
    </div>
  );
};
