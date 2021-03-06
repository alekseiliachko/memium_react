import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserAvatar, fetchUserData } from "../allUsers/actions";
import { useHistory } from "react-router";

export const useLazyUserData = (authorId) => {
  const dispatch = useDispatch();

  const authorData = useSelector(
    (state) => state.allUsersReducer.userDataById[authorId]
  );

  useEffect(() => {
    if (!authorData) {
      dispatch(fetchUserAvatar(authorId));
      dispatch(fetchUserData(authorId));
    }
  }, [authorId]);

  return authorData;
};

export const useGoToAuthorsPage = (authorId) => {
  const history = useHistory();

  const ownId = useSelector((state) => state.userReducer?.details?.accountId);

  if (ownId === authorId) {
    history.push("/my-articles");
  } else {
    history.push(`/author/${authorId}`);
  }
};
