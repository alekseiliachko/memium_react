import { Feed } from "../components/Feed";
import { connect } from "react-redux";
import {
  loadFeed,
  likePost,
  loadLikedList,
  deleteFromLiked,
  addToSubs,
  deleteFromSubs,
  loadSubs,
  loadCategory,
} from "../redux/user/actions";

const mapStateToProps = (store) => ({
  feedLoadingStatus: store.userReducer.feedLoadingStatus,
  feed: store.userReducer.feed,
  likedList: store.userReducer.likedList,
  likedLoadingStatus: store.userReducer.likedListLoadingStatus,
  subsLoadingStatus: store.userReducer.subsLoadingStatus,
  subs: store.userReducer.subs,
});

const mapDispatchToProps = (dispatch) => ({
  loadFeed: () => dispatch(loadFeed()),
  likePost: (articleId) => dispatch(likePost(articleId)),
  loadLiked: () => dispatch(loadLikedList()),
  unLikePost: (articleId) => dispatch(deleteFromLiked(articleId)),
  addToSubs: (accId) => dispatch(addToSubs(accId)),
  deleteFromSubs: (accId) => dispatch(deleteFromSubs(accId)),
  loadSubs: () => dispatch(loadSubs()),
  loadCategory: (category) => dispatch(loadCategory(category)),
});

export const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);
