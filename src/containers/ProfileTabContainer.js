import { connect } from "react-redux";
import { ProfileTab } from "../components/ProfileTab";
import {
  loadBl,
  deleteFromBl,
  loadLikedList,
  deleteFromLiked,
} from "../redux/user/actions";

const mapStateToProps = (store) => ({
  blackList: store.userReducer.blackList,
  likedList: store.userReducer.likedList,
});

const mapDispatchToProps = (dispatch) => ({
  loadBl: () => dispatch(loadBl()),
  deleteFromBl: (userId) => dispatch(deleteFromBl(userId)),
  loadLiked: () => dispatch(loadLikedList()),
  deleteFromLiked: (articleId) => dispatch(deleteFromLiked(articleId)),
});

export const ProfileTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileTab);
