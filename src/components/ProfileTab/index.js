import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BlackListCard, UserCard } from "../UserCard";
import { LikedCard } from "../LikedCard";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ProfileTab = ({
  loadBl,
  loadLiked,
  likedList,
  blackList,
  deleteFromBl,
  deleteFromLiked,
  loadSubs,
  subs,
  deleteFromSubs,
}) => {
  const query = useQuery();
  const history = useHistory();
  const [tab, setTab] = React.useState(0);

  useEffect(() => {
    loadBl();
    loadLiked();
    loadSubs();
    const currentTab = query.get("tab");
    if (currentTab) {
      setTab(Number(currentTab));
    } else {
      history.replace(history.location.pathname + "?tab=0");
    }
  }, []);

  const handleChange = (event, newValue) => {
    setTab(newValue);
    history.replace(history.location.pathname + `?tab=${newValue}`);
  };

  return (
    <div>
      <AntTabs value={tab} onChange={handleChange} aria-label="ant example">
        <AntTab label="Черный список" />
        <AntTab label="Понравившиеся" />
        <AntTab label="Подписки" />
      </AntTabs>
      {(tab === 0 &&
        blackList.map((el) => (
          <UserCard
            data={el}
            key={el.accountId}
            onDelete={deleteFromBl}
            btn="Unblock"
          />
        ))) ||
        (tab === 1 &&
          likedList.map((el) => (
            <LikedCard data={el} key={el.id} onDelete={deleteFromLiked} />
          ))) ||
        (tab === 2 &&
          subs.map((el) => (
            <UserCard
              data={el}
              onDelete={deleteFromSubs}
              key={el.accountId}
              btn="Unsub"
            />
          )))}
    </div>
  );
};
