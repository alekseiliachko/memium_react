import React, { useEffect } from "react";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppHeaderContainer } from "../containers/AppHeaderContainer";
import { SearchResults } from "../components/SearchResults/SearchResults";
import { useDispatch } from "react-redux";
import { loadLikedList, loadSubs } from "../redux/user/actions";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "40px",
    marginBottom: "40px",
  },
}));

export const SearchPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadLikedList());
    dispatch(loadSubs());
  }, []);

  return (
    <div>
      <AppHeaderContainer />
      <Container className={classes.root} maxWidth="sm">
        <SearchInput />
        <br />
        <SearchResults />
      </Container>
    </div>
  );
};
