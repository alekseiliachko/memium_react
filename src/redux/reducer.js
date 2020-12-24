import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { userReducer } from "./user/reducer";
import { articleReducer } from "./article/reducer";
import { allUsersReducer } from "./allUsers/reducer";
import { searchReducer } from "./search/reducer";

const rootState = combineReducers({
  authReducer,
  userReducer,
  articleReducer,
  allUsersReducer,
  searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export function configureStore() {
  const store = createStore(
    rootState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
