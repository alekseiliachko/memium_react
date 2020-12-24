import { connect } from "react-redux";
import { ProfileTab } from "../components/ProfileTab";
import {
  loadBl,
  deleteFromBl,
  loadLikedList,
  deleteFromLiked,
  loadSubs,
  deleteFromSubs,
} from "../redux/user/actions";

const mapStateToProps = (store) => ({
  blackList: store.userReducer.blackList,
  likedList: store.userReducer.likedList,
  subs: store.userReducer.subs,
});

const mapDispatchToProps = (dispatch) => ({
  loadBl: () => dispatch(loadBl()),
  deleteFromBl: (userId) => dispatch(deleteFromBl(userId)),
  loadLiked: () => dispatch(loadLikedList()),
  deleteFromLiked: (articleId) => dispatch(deleteFromLiked(articleId)),
  loadSubs: () => dispatch(loadSubs()),
  deleteFromSubs: (id) => dispatch(deleteFromSubs(id)),
});

export const ProfileTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTab);
