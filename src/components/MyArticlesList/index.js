import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMyArticles,
  likePost,
  deleteFromLiked,
  loadLikedList,
} from "../../redux/user/actions";
import { Box } from "@material-ui/core";
import { ArticleCard } from "../ArticleCard";
import { LOADING_STATUS } from "../../redux/user/reducer";

export const MyArticlesList = ({ articles }) => {
  const dispatch = useDispatch();
  const likedList = useSelector((store) => store.userReducer.likedList);
  const likedListLoadingStatus = useSelector(
    (store) => store.userReducer.likedListLoadingStatus
  );

  useEffect(async () => {
    dispatch(loadMyArticles());
    if (likedListLoadingStatus === LOADING_STATUS.NOT_LOADED) {
      dispatch(loadLikedList());
    }
  }, []);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          data={article}
          onLike={(id) => dispatch(likePost(id))}
          onUnLike={(id) => dispatch(deleteFromLiked(id))}
          liked={!!likedList.find((el) => el.id == article.id)}
        />
      ))}
    </Box>
  );
};
