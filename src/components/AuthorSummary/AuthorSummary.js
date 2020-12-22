import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Typography, Avatar, Divider } from "@material-ui/core";
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

const useStyles = makeStyles(() => ({
  subs: {
    color: "#555555",
  },
  root: {
    position: "absolute",
    left: "230px",
    top: "200px",
  },
  avatar: {
    cursor: "pointer",
    marginLeft: "20px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    margin: "5px 0px",
  },
  textInRow: {
    marginLeft: "5px",
  },
}));

export const AuthorSummary = ({ authorId, articleId }) => {
  const dispatch = useDispatch();
  const authorData = useSelector(
    (state) => state.allUsersReducer.userDataById[authorId]
  );
  const ownId = useSelector((state) => state.userReducer.id);
  const { likedList, likeStatus } = useSelector((state) => ({
    likedList: state.userReducer.likedList,
    likeStatus: state.userReducer.likedListLoadingStatus,
  }));
  useEffect(() => {
    if (!authorData) {
      dispatch(fetchUserAvatar(authorId));
      dispatch(fetchUserData(authorId));
    }
  }, [authorId]);
  useEffect(() => {
    if (likeStatus === LOADING_STATUS.NOT_LOADED) {
      dispatch(loadLikedList());
    }
  }, []);
  const canBeLiked = useMemo(
    () => likedList.every((likedPost) => likedPost.id !== articleId),
    [likedList]
  );

  const canBeBlocked = useMemo(() => ownId !== authorId, [ownId, authorId]);

  const handleLike = useCallback(async () => {
    if (canBeLiked) {
      await AccountsController.likePost(articleId);
    } else {
      await AccountsController.deleteLikeFromPost(articleId);
    }
    dispatch(loadLikedList());
  }, [canBeLiked]);

  const handleBlock = useCallback(async () => {
    await AccountsController.blUser(authorId);
    window.location.pathname = "/home";
  }, []);

  const classes = useStyles();

  const getContent = () => {
    return (
      <div>
        <Avatar src={authorData.avatar} className={classes.avatar} />
        <Typography variant="h6"> {authorData.name || "default"}</Typography>
        <Typography gutterBottom> {authorData.bio}</Typography>
        <Divider />
        <div>
          {likeStatus !== LOADING_STATUS.LOADED ? (
            <ProgressDecorator />
          ) : (
            <>
              <div onClick={handleLike} className={classes.row}>
                {canBeLiked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                <Typography className={classes.textInRow}>Лайк</Typography>
              </div>
              {canBeBlocked && (
                <div className={classes.row} onClick={handleBlock}>
                  <BlockIcon />
                  <Typography className={classes.textInRow}>
                    Заблокировать
                  </Typography>
                </div>
              )}
              <div className={classes.row}>
                <ChatIcon />
                <Typography className={classes.textInRow}>
                  Комментарии
                </Typography>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <Box width="200px" className={classes.root}>
      {authorData ? getContent() : <ProgressDecorator />}
    </Box>
  );
};
