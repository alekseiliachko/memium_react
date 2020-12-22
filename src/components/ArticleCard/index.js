import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Typography, IconButton, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountsOpenController from "../../api/AccountOpenController";

const useStyles = makeStyles({
  root: {
    width: 600,
    marginBottom: "10px",
    boxShadow: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  articleImage: {
    height: "200px",
    width: "300px",
    objectFit: "cover",
  },
  wrap: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
  },
});

export const ArticleCard = ({ data, liked, onLike, onUnLike }) => {
  const history = useHistory();
  const classes = useStyles();
  const [authorName, setAuthorName] = useState("");
  useEffect(() => {
    AccountsOpenController.getAccountsDetails(data.authorId).then((res) =>
      setAuthorName(res.data.name)
    );
  }, [data.authorId]);

  const onLikePost = (e) => {
    e.stopPropagation();
    if (!liked) {
      onLike(data.id);
    } else {
      onUnLike(data.id)
    }
  };
  return (
    <Card
      className={classes.root}
      onClick={() => history.push(`/article?id=${data.id}`)}
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column" px={2} height={200} flexGrow={1}>
          <Typography variant="h4">{data.title}</Typography>
          <Box flexGrow={1}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              className={classes.wrap}
            >
              {data.description}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">{authorName}</Typography>
            <div>
              <IconButton onClick={onLikePost}>
                {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
          </Box>
          <Typography variant="subtitle2" color="textSecondary">
            {new Date(data.date).toDateString()}
          </Typography>
        </Box>
        <Box height="100%">
          <Avatar
            variant="square"
            src={data.imageData}
            className={classes.articleImage}
          />
        </Box>
      </Box>
    </Card>
  );
};