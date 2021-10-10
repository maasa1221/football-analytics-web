import app, { AppActions, AppState } from "./Pages/App/Module";
import {
  createStore,
  combineReducers,
  Action,
  applyMiddleware,
  compose
} from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createHashHistory } from "history";

export const hashHistory = createHashHistory();
const storeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createRootReducer = () =>
  createStore(
    combineReducers({
      router: connectRouter(hashHistory),
      app
      //   menu,
      //   side_bar,
      //   staff_option,
      //   stafflogin,
      //   user_list,
      //   error_boundary
    }),
    storeEnhancers(applyMiddleware(routerMiddleware(hashHistory)))
  );

const store = createRootReducer();
export default store;

export type ReduxState = {
  app: AppState;
};

export type ReduxAction = AppActions | Action;
