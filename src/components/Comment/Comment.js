import React, { useCallback, useMemo } from "react";
import { Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
