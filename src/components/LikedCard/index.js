import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "10px",
  },
});

export const LikedCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <Box display="flex" alignItems="center">
        <Box>
          <Avatar src="./dsa" />
        </Box>
        <Box></Box>
      </Box>
    </Card>
  );
};
