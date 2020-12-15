import React, { useEffect, useState, useRef } from "react";
import { ProfileHeaderDetails } from "../ProfileHeaderDetails";
import { ProfileHeaderDetailsEdit } from "../ProfileHeaderDetailsEdit";
import { Avatar, Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LOADING_STATUS } from "../../redux/user/reducer";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const useStyles = makeStyles(() => ({
  avatar: {
    width: "140px",
    height: "140px",
  },
  subs: {
    color: "#555555",
  },
  input: {
    display: "none",
  },
  avatatLoader: {
    "&:hover": {
      "& svg": {
        opacity: "1",
      },
    },
  },
  icon: {
    position: "absolute",
    fontSize: "50px",
    opacity: 0,
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
  updateAvatar,
}) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const inputAvatar = useRef(null);

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

  const onSaveDetails = (details) => {
    updateDetails(details).then(setEditMode(false));
  };

  const onLoadAvatar = () => {
    inputAvatar.current.click();
  };

  const onFileChosen = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    updateAvatar(formData);
  };
  return (
    <div className="profile-header">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap-reverse"
      >
        {!editMode ? (
          <ProfileHeaderDetails
            setEditMode={() => setEditMode(!editMode)}
            details={details}
            subs={subs}
          />
        ) : (
          <ProfileHeaderDetailsEdit
            setEditMode={() => setEditMode(!editMode)}
            onSaveDetails={onSaveDetails}
            details={details}
          />
        )}
        <Box className="profile-header__avatar">
          <input
            ref={inputAvatar}
            className={classes.input}
            accept="image/*"
            type="file"
            onChange={onFileChosen}
          />
          <IconButton className={classes.avatatLoader} onClick={onLoadAvatar}>
            <Avatar src={avatar} className={classes.avatar}></Avatar>
            <AddAPhotoIcon className={classes.icon} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};
