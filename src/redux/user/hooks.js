import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserAvatar, fetchUserData } from "../allUsers/actions";

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
