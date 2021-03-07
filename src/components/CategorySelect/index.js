import React from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const AntTab = withStyles(() => ({
  root: {
    marginRight: "5px",
    "&:hover": {
      fontWeight: "bold",
    },
    "&[aria-selected='true']": {
      color: "#555555",
      fontWeight: "bold",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const AntTabs = withStyles({
  root: {
    marginBottom: "10px",
  },
  indicator: {
    backgroundColor: "#555555",
  },
})(Tabs);

export const CategorySelect = ({ handleChange, tab }) => {
  return (
    <Box my={2}>
      <AntTabs value={tab} onChange={handleChange} textColor="primary" centered>
        <AntTab label="Рекомендации" />
        <AntTab label="Астрология" />
        <AntTab label="Биология" />
        <AntTab label="Химия" />
        <AntTab label="Айти" />
        <AntTab label="Другое" />
      </AntTabs>
    </Box>
  );
};
