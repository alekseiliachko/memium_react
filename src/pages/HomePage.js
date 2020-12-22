import { Container } from "@material-ui/core";
import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { FeedContainer } from "../containers/FeedContainer";

export const HomePage = () => {
  return (
    <div className="home-page">
      <AppHeaderContainer />
      <Container>
        <FeedContainer />
      </Container>
    </div>
  );
};
