import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Menu, Avatar, Box, Typography, Divider } from "@material-ui/core";
import MuiMenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() => ({
  menu: {
    backgroundColor: "#DCDADA",
  },
  avatar: {
    marginRight: "10px",
  },
  box: {
    marginBottom: "10px",
  },
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#DCDADA",
      padding: "15px",
      "& a": {
        textDecoration: "none",
      },
    },
  },
}));

const MenuItem = withStyles({
  root: {
    justifyContent: "center",
  },
})(MuiMenuItem);

export const HeaderMenu = ({
  open,
  handleClose,
  anchorEl,
  username,
  avatar,
  onLogout,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Menu
        className={classes.root}
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.box}
        >
          <Avatar className={classes.avatar} src={avatar}></Avatar>
          <Typography>{username}</Typography>
        </Box>
        <MenuItem>Мои статьи</MenuItem>
        <MenuItem>Добавить статью</MenuItem>
        <MenuItem>Понравившиеся</MenuItem>
        <MenuItem>Подписки</MenuItem>
        <Divider></Divider>
        <MenuItem>Настройки</MenuItem>
        <MenuItem onClick={onLogout}>Выход</MenuItem>
      </Menu>
    </div>
  );
};
