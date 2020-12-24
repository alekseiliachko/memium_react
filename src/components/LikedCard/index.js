import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Avatar, Typography, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountsOpenController from "../../api/AccountOpenController";
import ArticlesController from "../../api/ArticlesController";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "25px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  avatar: {
    marginRight: "10px",
    width: "50px",
    height: "50px",
  },
  iconButton: {
    padding: 0,
  },
  articleImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
});

export const LikedCard = ({ data, onDelete }) => {
  const classes = useStyles();
  const history = useHistory();
  const [authorName, setAuthorName] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    AccountsOpenController.getAccountsDetails(data.authorId).then((res) =>
      setAuthorName(res.data.name)
    );
    AccountsOpenController.getAccountsAvatar(data.authorId).then((res) => {
      setAuthorImg(res);
    });
    ArticlesController.getArticleImage(data.id).then((res) => {
      setImage(res);
    });
  }, []);
  return (
    <Card
      className={classes.root}
      variant="outlined"
      onClick={() => history.push(`/article/${data.id}`)}
    >
      <Box display="flex" alignItems="flex-start" mb={2}>
        <Avatar src={authorImg} className={classes.avatar} />
        <Box
          className={classes.author}
          display="flex"
          flexDirection="column"
          flexGrow={1}
        >
          <Typography className={classes.name} variant="subtitle1">
            {authorName}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {new Date(data.date).toDateString()}
          </Typography>
        </Box>
        <IconButton
          className={classes.IconButton}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(data.id);
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
      {image && (
        <Box mb={2}>
          <img src={image} className={classes.articleImage} />
        </Box>
      )}
      <Typography variant="h5">{data.title}</Typography>
    </Card>
  );
};
