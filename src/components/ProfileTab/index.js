import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BlackListCard } from "../BlackListCard";
import { LikedCard } from "../LikedCard";
import { loadLikedList } from "../../redux/user/actions";
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
      fontWeight: "bold",
    },
    "&[aria-selected='true']": {
      color: "#555555",
      fontWeight: "bold",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

export const ProfileTab = ({
  loadBl,
  loadLiked,
  likedList,
  blackList,
  deleteFromBl,
}) => {
  const [tab, setTab] = React.useState(0);

  useEffect(() => {
    loadBl();
    loadLiked();
  }, []);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div>
      <AntTabs value={tab} onChange={handleChange} aria-label="ant example">
        <AntTab label="Черный список" />
        <AntTab label="Понравившиеся" />
      </AntTabs>
      {tab === 0
        ? blackList.map((el) => (
            <BlackListCard
              data={el}
              key={el.accountId}
              onDelete={deleteFromBl}
            />
          ))
        : likedList.map((el) => <LikedCard data={el} key={el.id} />)}
    </div>
  );
};
