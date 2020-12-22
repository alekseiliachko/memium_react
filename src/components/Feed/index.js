import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AuthorCard } from "../AuthorCard";
import { ArticleCard } from "../ArticleCard";
import { LOADING_STATUS } from "../../redux/user/reducer";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginBottom: "10px",
    boxShadow: "none",
  },
});

export const Feed = ({
  feed,
  feedLoadingStatus,
  loadFeed,
  likedList,
  likePost,
  likedLoadingStatus,
  loadLiked,
  unLikePost,
  addToSubs,
  deleteFromSubs,
  loadSubs,
  subsLoadingStatus,
  subs,
}) => {
  const classes = useStyles();
  useEffect(() => {
    if (feedLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadFeed();
    }
    if (likedLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadLiked();
    }
    if (subsLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      loadSubs();
    }
  }, []);
  return (
    <Box className="feed" display="flex" p={2} flexWrap="wrap">
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {feedLoadingStatus === LOADING_STATUS.LOADED
          ? feed.accounts.map((acc) => (
              <AuthorCard
                data={acc}
                key={acc.accountId}
                onSub={addToSubs}
                onDelete={deleteFromSubs}
                subbed={!!subs.find((el) => el.accountId == acc.accountId)}
              />
            ))
          : null}
      </Box>
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {feedLoadingStatus === LOADING_STATUS.LOADED &&
        likedLoadingStatus === LOADING_STATUS.LOADED
          ? feed.articles.map((article) => (
              <ArticleCard
                data={article}
                key={article.id}
                onLike={likePost}
                onUnLike={unLikePost}
                liked={!!likedList.find((el) => el.id == article.id)}
              />
            ))
          : null}
      </Box>
    </Box>
  );
};
