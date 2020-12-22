import { ArticleView } from "../components/ArticleView/ArticleView";
import { connect } from "react-redux";
import { fetchArticleData } from "../redux/article/actions";

const mapStateToProps = (store, ownProps) => ({
  articleData: store.articleReducer.articleDataById[ownProps.articleId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArticleData: () => dispatch(fetchArticleData(ownProps.articleId)),
});

export const ArticleViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleView);
