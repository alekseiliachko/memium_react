import React, { useCallback, useEffect, useMemo } from "react";
import { Avatar, Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { ProgressDecorator } from "../ProgressDecorator";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BlockIcon from "@material-ui/icons/Block";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { LOADING_STATUS } from "../../redux/user/reducer";
import { loadLikedList } from "../../redux/user/actions";
import AccountsController from "../../api/AccountsController";
import { useHistory } from "react-router-dom";
import { useLazyUserData } from "../../redux/user/hooks";
import ArticlesController from "../../api/ArticlesController";
import { goToAuthorsPage, resetArticleData } from "../../redux/article/actions";

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
  const history = useHistory();
  const authorData = useLazyUserData(authorId);
  const ownId = useSelector((state) => state.userReducer?.details?.accountId);

  const { likedList, likeStatus } = useSelector((state) => ({
    likedList: state.userReducer.likedList,
    likeStatus: state.userReducer.likedListLoadingStatus,
  }));

  useEffect(() => {
    if (likeStatus === LOADING_STATUS.NOT_LOADED) {
      dispatch(loadLikedList());
    }
  }, []);
  const canBeLiked = useMemo(
    () => likedList.every((likedPost) => likedPost.id !== articleId),
    [likedList]
  );

  const notOwnedByUser = useMemo(() => ownId !== authorId, [ownId, authorId]);

  const handleLike = useCallback(async () => {
    if (canBeLiked) {
      await AccountsController.likePost(articleId);
    } else {
      await AccountsController.deleteLikeFromPost(articleId);
    }
    dispatch(loadLikedList());
  }, [canBeLiked]);

  const handleDelete = useCallback(async () => {
    await ArticlesController.deleteArticle(articleId);
    dispatch(resetArticleData(articleId));
    history.push("/home");
  }, []);

  const handleBlock = useCallback(async () => {
    await AccountsController.blUser(authorId);
    history.push("/home");
  }, []);

  const classes = useStyles();

  const getContent = () => {
    return (
      <div>
        <Avatar
          onClick={() => {
            dispatch(goToAuthorsPage(authorId, history));
          }}
          src={authorData.avatar}
          className={classes.avatar}
        />
        <Typography variant="h6"> {authorData.name || "default"}</Typography>
        <Typography gutterBottom> {authorData.bio}</Typography>
        <Divider />
        <div>
          <div onClick={handleLike} className={classes.row}>
            {canBeLiked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            <Typography className={classes.textInRow}>Лайк</Typography>
          </div>
          {!notOwnedByUser && (
            <div
              className={classes.row}
              onClick={() => history.push(`/edit-article/${articleId}`)}
            >
              <EditIcon />
              <Typography className={classes.textInRow}>
                Редактировать
              </Typography>
            </div>
          )}
          {!notOwnedByUser && (
            <div className={classes.row} onClick={handleDelete}>
              <DeleteIcon />
              <Typography className={classes.textInRow}>Удалить</Typography>
            </div>
          )}
          {notOwnedByUser && (
            <div className={classes.row} onClick={handleBlock}>
              <BlockIcon />
              <Typography className={classes.textInRow}>
                Заблокировать
              </Typography>
            </div>
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
