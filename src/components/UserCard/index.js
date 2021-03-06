import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Box,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { goToAuthorsPage } from "../../redux/article/actions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "10px",
    marginBottom: "10px",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
  name: {
    fontWeight: "bold",
  },
  content: {
    padding: "4px 16px",
  },
  actions: {
    paddingLeft: "16px",
  },
  button: {
    background:
      "linear-gradient(112.31deg, #4E4E4E 48.46%, rgba(49, 49, 49, 0.630208) 84.03%, rgba(0, 0, 0, 0) 161.71%)",
    color: "#FFF",
  },
});

export const UserCard = ({ data, onDelete, btn }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root} variant="outlined">
      <Box display="flex" alignItems="center">
        <Box>
          <Avatar
            onClick={() => {
              dispatch(goToAuthorsPage(data.accountId, history));
            }}
            className={classes.avatar}
            src={data.imageData}
          />
        </Box>
        <Box maxWidth="70%">
          <CardContent className={classes.content}>
            <Typography className={classes.name} variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.bio}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => onDelete(data.accountId)}
            >
              {btn}
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};
