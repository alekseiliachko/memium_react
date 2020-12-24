import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../redux/search/actions";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
  },
  input: {
    width: "100%",
    marginRight: "50px",
  },
}));

export const SearchInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Input
        className={classes.input}
        placeholder={"Поиск"}
        value={text}
        onInput={(e) => setText(e.target.value)}
      />
      <Button
        color="primary"
        onClick={() => dispatch(fetchSearchResults(text))}
        variant="contained"
      >
        Искать
      </Button>
    </div>
  );
};
