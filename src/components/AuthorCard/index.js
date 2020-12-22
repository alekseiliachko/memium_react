import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Typography, IconButton, Avatar } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import { useHistory } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginBottom: "10px",
    boxShadow: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  authorImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  wrap: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
  },
});

export const AuthorCard = ({ data, onDelete, onSub, subbed }) => {
  const history = useHistory();
  const classes = useStyles();
  const onSubscribe = (e) => {
    e.stopPropagation();
    if (subbed) {
      onDelete(data.accountId);
    } else {
      onSub(data.accountId);
    }
  };
  return (
    <Card
      className={classes.root}
      onClick={() => history.push(`/account?id=${data.accountId}`)}
    >
      <Box mb={2}>
        <Avatar
          variant="square"
          src={data.imageData}
          className={classes.authorImage}
        />
      </Box>
      <Box display="flex" alignItems="center" px={2}>
        <Box flexGrow={1}>
          <Typography variant="h5">{data.name}</Typography>
        </Box>
        <IconButton onClick={onSubscribe}>
          {subbed ? <PersonAddDisabledIcon /> : <PersonAddIcon />}
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Box px={2}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.wrap}
        >
          {data.bio}
        </Typography>
      </Box>
    </Card>
  );
};
