import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard } from "../ArticleCard";
import {
  addToSubs,
  deleteFromLiked,
  deleteFromSubs,
  likePost,
  loadFeed,
} from "../../redux/user/actions";
import { Divider, Typography } from "@material-ui/core";
import { AuthorCard } from "../AuthorCard";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  authorsWrap: {
    marginTop: "20px",
  },
  title: {
    marginBottom: "20px",
  },
}));

export const SearchResults = () => {
  const { articles, authors } = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const likedList = useSelector((state) => state.userReducer.likedList);
  const subs = useSelector((state) => state.userReducer.subs);
  const onLikePost = (articleId) => dispatch(likePost(articleId));
  const onUnlikePost = (articleId) => dispatch(deleteFromLiked(articleId));
  const onAddToSubs = (accId) => dispatch(addToSubs(accId));
  const onDeleteFromSubs = (accId) => dispatch(deleteFromSubs(accId));

  const isDividerVisible = useMemo(() => {
    return Boolean(articles.length && authors.length);
  }, [articles, authors]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Boolean(articles.length) && (
        <div>
          <Typography className={classes.title} variant={"h6"}>
            Статьи
          </Typography>
          <div>
            {articles.map((article) => {
              const hasLike = !!likedList.find(
                (likedPost) => likedPost.id === article.id
              );
              return (
                <ArticleCard
                  liked={hasLike}
                  onLike={onLikePost}
                  onUnLike={onUnlikePost}
                  data={article}
                  key={article.id}
                />
              );
            })}
          </div>
        </div>
      )}
      {isDividerVisible && <Divider />}
      {Boolean(authors.length) && (
        <div className={classes.authorsWrap}>
          <Typography className={classes.title} variant={"h6"}>
            Авторы
          </Typography>
          <div>
            {authors.map((author) => {
              return (
                <AuthorCard
                  data={author}
                  key={author.id}
                  onSub={onAddToSubs}
                  onDelete={onDeleteFromSubs}
                  subbed={
                    !!subs.find((el) => el.accountId === author.accountId)
                  }
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
