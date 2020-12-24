import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Box,
  Input,
  IconButton,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Editor from "react-medium-editor";
import { PhotoCamera } from "@material-ui/icons";
import ClearIcon from "@material-ui/icons/Clear";
import ArticlesController from "../../api/ArticlesController";
import { useHistory } from "react-router-dom";
import {
  ARTICLE_CATEGORIES,
  mapCategoryToText,
} from "../../redux/user/reducer";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resetArticleData } from "../../redux/article/actions";

const useStyles = makeStyles((theme) => ({
  articlePage: {
    marginTop: "70px",
    marginBottom: "70px",
  },
  imageContainer: {
    height: "300px",
    width: "100%",
    margin: "20px 0px 30px",
    border: "1px blue solid",
    borderRadius: "10px",
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  input: {
    display: "none",
  },
  inputWrap: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputIcon: {
    width: "36px",
    height: "36px",
    border: "1px blue solid",
    borderRadius: "100px",
  },
  cancelIcon: {
    position: "absolute",
    right: "10px",
  },
  circleWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  buttonsWrap: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
  },
  formControl: {
    margin: theme.spacing(1),
    marginLeft: "-1px",
    minWidth: 120,
  },
}));

export const ArticleCreator = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // режим редактирования
  const { articleId } = useParams();
  const [title, setTitle] = useState("Заголовок");
  const [desc, setDesc] = useState("Второй заголовок бывает мощнее первого");
  const [text, setText] = useState("Здесь будет ваш текст");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(ARTICLE_CATEGORIES[0]);
  const ownId = useSelector((state) => state.userReducer?.details?.accountId);
  const classes = useStyles();

  useEffect(() => {
    const getArticle = async (id) => {
      ArticlesController.getArticleById(id).then(({ data }) => {
        setTitle(data.title);
        setDesc(data.description);
        setCategory(data.category);
        setText(data.data);
      });
      ArticlesController.getArticleImage(id).then((url) => {
        setImage(url);
      });
    };
    if (articleId) {
      getArticle(articleId);
    }
  }, [articleId]);

  const handlePictureUpload = useCallback((e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }, []);

  const handleCancelPicture = useCallback(() => {
    URL.revokeObjectURL(image);
    setImage("");
  }, []);

  const handleCancelEdit = useCallback(() => {
    if (articleId) {
      history.push(`article/${articleId}`);
    } else {
      history.push("/home");
    }
  }, []);

  const uploadButtonHandler = async () => {
    let _articleId;
    if (!articleId) {
      const article = await ArticlesController.createArticle({
        category,
        title,
        description: desc,
        data: text,
        imageUrl: null,
      });
      _articleId = article.id;
    } else {
      await ArticlesController.updateArticle({
        id: articleId,
        authorId: ownId,
        category,
        title,
        description: desc,
        data: text,
        imageUrl: null,
      });
      _articleId = articleId;
      dispatch(resetArticleData(articleId));
    }

    if (image) {
      const attemptFormData = new FormData();
      const blob = await fetch(image).then((res) => res.blob());
      attemptFormData.append("image", blob);
      await ArticlesController.setImageForArticle(_articleId, attemptFormData);
    }

    history.push(`/article/${_articleId}`);
  };

  return (
    <Container maxWidth="sm" className={classes.articlePage}>
      <div>
        <div>
          <Input
            value={title}
            onInput={(e) => setTitle(e.target.value)}
            inputProps={{ "aria-label": "description" }}
          />
          <br />
          <Input
            value={desc}
            onInput={(e) => setDesc(e.target.value)}
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel id="category-label">Категория</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {ARTICLE_CATEGORIES.map((val) => {
              return (
                <MenuItem key={val} value={val}>
                  {" "}
                  {mapCategoryToText(val)}{" "}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <Box className={classes.imageContainer}>
        {image ? (
          <>
            <IconButton
              onClick={handleCancelPicture}
              className={classes.cancelIcon}
              color="primary"
              component="span"
            >
              <ClearIcon />
            </IconButton>
            <img className={classes.image} src={image} alt="" />
          </>
        ) : (
          <div className={classes.inputWrap}>
            <label htmlFor="icon-button-file">
              <IconButton
                className={classes.inputIcon}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <input
              onChange={handlePictureUpload}
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
          </div>
        )}
      </Box>
      <Editor
        tag="div"
        text={text}
        options={{
          placeholder: {
            text: "",
          },
        }}
        onChange={setText}
      />
      <label className={classes.buttonsWrap} htmlFor="contained-button-file">
        <Button
          onClick={uploadButtonHandler}
          variant="contained"
          color="primary"
          component="span"
        >
          {articleId ? "Редактировать статью" : "Создать статью"}
        </Button>
        <Button
          onClick={handleCancelEdit}
          variant="contained"
          color="secondary"
          component="span"
        >
          Отмена
        </Button>
      </label>
    </Container>
  );
};
