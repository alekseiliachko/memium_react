import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { LOADING_STATUS } from "../../redux/user/reducer";
import { loadAvatar } from "../../redux/user/actions";

const useStyles = makeStyles(() => ({
  avatar: {
    width: "140px",
    height: "140px",
  },
  subs: {
    color: "#555555",
  },
}));

export const ProfileHeader = ({
  details,
  avatar,
  loadDetails,
  detailsLoadingStatus,
  avatarLoadingStatus,
  loadAvatar,
}) => {
  const classes = useStyles();
  useEffect(() => {
    if (avatarLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadAvatar();
    }
    if (detailsLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadDetails();
    }
  }, []);
  return (
    <div className="profile-header">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="50%" className="profile-header__details">
          <Box display="flex">
            <Typography variant="h4">{details.name}</Typography>
            <IconButton aria-label="bookmark">
              <EditIcon />
            </IconButton>
          </Box>
          <Typography variant="subtitle1" className="details__about">
            {details.bio}
          </Typography>
          <Typography className={classes.subs}>26 подписок</Typography>
        </Box>
        <div className="profile-header__avatar">
          <Avatar src={avatar} className={classes.avatar}></Avatar>
        </div>
      </Box>
    </div>
  );
};
