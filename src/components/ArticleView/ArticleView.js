import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleData } from "../../redux/article/actions";
import ArticlesController from "../../api/ArticlesController";
import { mapCategoryToText } from "../../redux/user/reducer";

const getArticleDate = (articleDate) => {
  const data = new Date(articleDate);
  const mo = new Intl.DateTimeFormat("ru", { month: "short" }).format(data);
  const da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(data);
  return `${mo} ${da}`;
};

const useStyles = makeStyles(() => ({
  imageContainer: {
    height: "300px",
    width: "100%",
    margin: "20px 0px 30px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  circleWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  categoryWrap: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

export const ArticleView = ({ articleId }) => {
  const dispatch = useDispatch();
  const articleData = useSelector(
    (store) => store.articleReducer.articleDataById[articleId]
  );
  const [image, setImage] = useState("");
  useEffect(() => {
    if (!articleData) {
      dispatch(fetchArticleData(articleId));
    }
  }, [articleId]);

  useEffect(async () => {
    const temp = await ArticlesController.getArticleImage(articleId);
    setImage(temp);
  }, [articleId]);

  const classes = useStyles();

  return (
    <>
      {articleData ? (
        <>
          <Typography variant="subtitle2">
            {getArticleDate(articleData.date)}
          </Typography>
          <Typography variant="h3">{articleData.title}</Typography>
          <Typography variant="h6">{articleData.description}</Typography>
          {image ? (
            <Box className={classes.imageContainer}>
              <img className={classes.image} src={image} alt="" />
            </Box>
          ) : null}
          <div dangerouslySetInnerHTML={{ __html: articleData.data }} />{" "}
          <Button
            className={classes.categoryWrap}
            variant="outlined"
            disabled={true}
          >
            {mapCategoryToText(articleData.category)}
          </Button>
        </>
      ) : (
        <div className={classes.circleWrap}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};
