import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  Toolbar,
  TextField,
  Button,
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
import { Comment } from "../Comment/Comment";

const useStyles = makeStyles(() => ({
  root: {},
  textInput: {
    width: "100%",
    marginTop: "10px",
  },
  titleWrap: {
    marginBottom: "8px",
  },
  buttonSubmit: {
    marginTop: "10px",
  },
}));

export const CommentsCenter = ({ articleId }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const ownId = useSelector((state) => state.userReducer?.details?.accountId);

  const handleText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const getComments = async () => {
    const newComments = await CommentsController.getComments(articleId);
    setComments(newComments);
  };

  useEffect(() => {
    getComments();
  }, []);

  const submitComment = async () => {};

  const deleteComment = async (commentId) => {
    await CommentsController.deleteComment(commentId);
    getComments();
  };

  const renderComment = (comment) => {
    return (
      <div>
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
          isOwn={ownId === comment.authorId}
        />
      </div>
    );
  };

  const getContent = () => {
    return (
      <div>
        <div>
          {comments.length && (
            <Typography className={classes.titleWrap} variant="h6">
              Комментарии {comments.length}
            </Typography>
          )}
          {comments.map(renderComment)}
        </div>
        <div>
          <Typography variant="h6">Добавить комментарий</Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            onChange={handleText}
            value={text}
            className={classes.textInput}
            rows={4}
            variant="outlined"
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            onClick={submitComment}
          >
            Отправить
          </Button>
        </div>
      </div>
    );
  };

  return <Box className={classes.root}>{getContent()}</Box>;
};
