import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { ArticleCreator } from "../components/ArticleCreator/ArticleCreator";

export const ArticleCreationPage = () => {
  return (
    <div>
      <AppHeaderContainer />
      <ArticleCreator />
    </div>
  );
};
