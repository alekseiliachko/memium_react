import React, { useState, useEffect } from "react";
import { HeaderMenu } from "../HeaderMenu";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/Logo.svg";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Container,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BookmarkIcon from "@material-ui/icons/BookmarkBorder";
import ArticlesController from "../../api/ArticlesController";
import { LOADING_STATUS } from "../../redux/common";

const useStyles = makeStyles(() => ({
  menuButton: {
    color: "#555555",
  },
  title: {
    flexGrow: 1,
    color: "#4E4E4E",
    marginLeft: "10px",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#DCDADA",
  },
  avatar: {
    cursor: "pointer",
    marginLeft: "20px",
  },
}));

export const AppHeader = ({
  username,
  avatar,
  onLogout,
  loadAvatar,
  avatarLoadingStatus,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(async () => {
    const res = await ArticlesController.myArticles();
    for (const article of res.data) {
      ArticlesController.getArticleById(article.id);
    }
  }, []);

  useEffect(() => {
    if (avatarLoadingStatus == LOADING_STATUS.NOT_LOADED) {
      loadAvatar();
    }
  }, []);

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Container>
          <Toolbar>
            <img src={Logo} alt="memium logo" />
            <Typography variant="h5" className={classes.title}>
              Memium
            </Typography>
            <IconButton
              className={classes.menuButton}
              aria-label="search"
              color="inherit"
              onClick={() => setShowSearch(!showSearch)}
            >
              <SearchIcon />
            </IconButton>
            {showSearch && (
              <TextField type="search" placeholder="Поиск" size="small" />
            )}
            <IconButton
              className={classes.menuButton}
              aria-label="bookmark"
              color="inherit"
            >
              <BookmarkIcon />
            </IconButton>
            <div>
              <Avatar
                src={avatar}
                className={classes.avatar}
                onClick={handleMenu}
              />
            </div>
            <HeaderMenu
              open={open}
              handleClose={handleClose}
              anchorEl={anchorEl}
              username={username}
              avatar={avatar}
              onLogout={onLogout}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
