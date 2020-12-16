import React from "react";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { ProfileHeaderContainer } from "../containers/ProfileHeaderContainer";
import { ProfileTabContainer } from "../containers/ProfileTabContainer";
import { Box, Container } from "@material-ui/core";

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <AppHeaderContainer />
      <Container className="profile-page__content">
        <Box mx={3} my={4}>
          <ProfileHeaderContainer />
        </Box>
        <ProfileTabContainer />
      </Container>
    </div>
  );
};
