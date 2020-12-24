import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AuthorCard } from "../AuthorCard";
import { ArticleCard } from "../ArticleCard";
import { LOADING_STATUS } from "../../redux/user/reducer";
import { Box } from "@material-ui/core";
import { CategorySelect } from "../CategorySelect";
import { CATEGORY } from "../../redux/user/reducer";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginBottom: "10px",
    boxShadow: "none",
  },
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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
  loadCategory,
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

  const query = useQuery();
  const history = useHistory();
  const [tab, setTab] = React.useState(0);

  useEffect(() => {
    const currentTab = query.get("tab");
    if (currentTab) {
      setTab(Number(currentTab));
    } else {
      history.replace(history.location.pathname + "?tab=0");
    }
  }, []);

  const handleChange = (event, newValue) => {
    setTab(newValue);
    if (newValue == 0) {
      loadFeed();
    } else {
      loadCategory(CATEGORY[newValue]);
    }
    history.replace(history.location.pathname + `?tab=${newValue}`);
  };
  return (
    <>
      <CategorySelect handleChange={handleChange} tab={tab} />
      <Box
        className="feed"
        display="flex"
        p={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        {feed.accounts ? (
          <Box width="50%" display="flex" flexDirection="column">
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
        ) : null}
        <Box width="50%" display="flex" flexDirection="column">
          {feedLoadingStatus === LOADING_STATUS.LOADED
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
    </>
  );
};
