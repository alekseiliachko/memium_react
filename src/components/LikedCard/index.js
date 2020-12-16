import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Avatar, Typography, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Logo from "../../assets/govno.jpg";
import AccountsOpenController from "../../api/AccountOpenController";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "25px",
    marginBottom: "10px",
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
  const [authorName, setAuthorName] = useState("");
  const [authorImg, setAuthorImg] = useState("");

  useEffect(() => {
    AccountsOpenController.getAccountsDetails(data.authorId).then((res) =>
      setAuthorName(res.data.name)
    );
    AccountsOpenController.getAccountsAvatar(data.authorId).then((res) => {
      setAuthorImg(URL.createObjectURL(res.data));
    });
  }, []);
  return (
    <Card className={classes.root} variant="outlined">
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
          onClick={() => onDelete(data.id)}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
      {data.imageUrl && (
        <Box mb={2}>
          <img src={data.imageUrl} className={classes.articleImage} />
        </Box>
      )}
      <Typography variant="h5">{data.title}</Typography>
    </Card>
  );
};
