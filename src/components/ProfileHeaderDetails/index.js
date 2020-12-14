import React, { useState } from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  subs: {
    color: "#555555",
  },
}));

export const ProfileHeaderDetails = ({ setEditMode, details, subs }) => {
  const classes = useStyles();
  return (
    <Box width="50%" className="profile-header__details">
      <Box display="flex">
        <Typography variant="h4">{details.name}</Typography>
        <IconButton aria-label="bookmark" onClick={setEditMode}>
          <EditIcon />
        </IconButton>
      </Box>
      <Typography variant="subtitle1" className="details__about">
        {details.bio}
      </Typography>
      <Typography className={classes.subs}>{subs.length} подписок</Typography>
    </Box>
  );
};
