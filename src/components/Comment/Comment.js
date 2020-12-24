import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  Toolbar,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAvatar, fetchUserData } from "../../redux/allUsers/actions";
import { ProgressDecorator } from "../ProgressDecorator";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BlockIcon from "@material-ui/icons/Block";
import ChatIcon from "@material-ui/icons/Chat";
import { LOADING_STATUS } from "../../redux/user/reducer";
import { loadLikedList } from "../../redux/user/actions";
import AccountsController from "../../api/AccountsController";
import { useHistory } from "react-router-dom";
import CommentsController from "../../api/CommentsController";
import { useLazyUserData } from "../../redux/user/hooks";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => ({
  wrap: {
    display: "flex",
    marginBottom: "20px",
    position: "relative",
  },
  deleteIcon: {
    cursor: "pointer",
    position: "absolute",
    right: "0",
    top: "0",
  },
  textBlock: {
    marginLeft: "10px",
  },
}));

export const Comment = ({ comment, isOwn, deleteComment }) => {
  const classes = useStyles();
  const authorData = useLazyUserData(comment.authorId);

  const dateComp = useMemo(() => {
    const mo = new Intl.DateTimeFormat("ru", { month: "short" }).format(
      comment.date
    );
    const da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(
      comment.date
    );

    return (
      <Typography component="span" variant="subtitle2">
        {`, ${mo} ${da}`}
      </Typography>
    );
  }, [comment.date]);

  const handleDeleteComment = useCallback(() => {
    deleteComment(comment.id);
  }, [comment.id]);

  if (!authorData) {
    return null;
  }

  return (
    <div className={classes.wrap}>
      <Avatar src={authorData.avatar} />
      <div className={classes.textBlock}>
        {isOwn && (
          <div className={classes.deleteIcon} onClick={handleDeleteComment}>
            <ClearIcon />
          </div>
        )}
        <Typography component="span" variant="subtitle2">
          {authorData.name}
        </Typography>
        {dateComp}
        <div>{comment.content}</div>
      </div>
    </div>
  );
};
