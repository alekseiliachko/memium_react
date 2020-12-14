import React, { useEffect, useState } from "react";
import { ProfileHeaderDetails } from "../ProfileHeaderDetails";
import { ProfileHeaderDetailsEdit } from "../ProfileHeaderDetailsEdit";
import { Avatar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LOADING_STATUS } from "../../redux/user/reducer";

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
  subs,
  loadDetails,
  detailsLoadingStatus,
  avatarLoadingStatus,
  loadAvatar,
  loadSubs,
  subsLoadingStatus,
  updateDetails,
}) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    if (avatarLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadAvatar();
    }
    if (detailsLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadDetails();
    }
    if (subsLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadSubs();
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
        {editMode ? (
          <ProfileHeaderDetails
            setEditMode={() => setEditMode(!editMode)}
            details={details}
            subs={subs}
          />
        ) : (
          <ProfileHeaderDetailsEdit
            setEditMode={() => setEditMode(!editMode)}
            onSaveDetails={updateDetails}
            details={details}
          />
        )}
        <div className="profile-header__avatar">
          <Avatar src={avatar} className={classes.avatar}></Avatar>
        </div>
      </Box>
    </div>
  );
};
