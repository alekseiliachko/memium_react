import React, { useState, useEffect } from "react";
import { HeaderMenu } from "../HeaderMenu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/Logo.svg";
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Container,
  Box,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { LOADING_STATUS } from "../../redux/common";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  menuButton: {
    color: "#555555",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  divider: {
    flexGrow: 1,
  },
  title: {
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
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Link to="/home" className={classes.link}>
              <Box display="flex" alignItems="center">
                <img src={Logo} alt="memium logo" />
                <Typography variant="h5" className={classes.title}>
                  Memium
                </Typography>
              </Box>
            </Link>
            <div className={classes.divider}></div>
            <IconButton
              className={classes.menuButton}
              aria-label="search"
              color="inherit"
              onClick={() => history.push("/search")}
            >
              <SearchIcon />
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
