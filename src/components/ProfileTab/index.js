import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BlackListCard } from "../BlackListCard";
import { LikedCard } from "../LikedCard";
const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
    marginBottom: "10px",
  },
  indicator: {
    backgroundColor: "#555555",
  },
})(Tabs);

const AntTab = withStyles(() => ({
  root: {
    textTransform: "none",
    marginRight: "10px",
    "&:hover": {
      color: "#555555",
      fontWeight: "bold",
    },
    "&$selected": {
      color: "#555555",
      fontWeight: "bold",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export const ProfileTab = () => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div>
      <AntTabs value={tab} onChange={handleChange} aria-label="ant example">
        <AntTab label="Черный список" />
        <AntTab label="Понравившиеся" />
      </AntTabs>
      {tab === 0 ? <BlackListCard /> : <LikedCard />}
    </div>
  );
};
