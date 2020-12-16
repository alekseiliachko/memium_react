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

export const BlackListCard = ({ imageData, name, bio }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <Box display="flex" alignItems="center">
        <Box>
          <Avatar className={classes.avatar} src={imageData} />
        </Box>
        <Box maxWidth="70%">
          <CardContent className={classes.content}>
            <Typography className={classes.name} variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {bio}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button className={classes.button} variant="contained">
              Unblock
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};
