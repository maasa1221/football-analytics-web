import { createBrowserHistory } from "history";
import { Action, combineReducers, createStore } from "redux";
import { AppActions } from "./Pages/App/Module";

export const browserHistory = createBrowserHistory();

const createRootReducer = () =>
  createStore(
    combineReducers({
      //   menu,
      //   side_bar,
      //   staff_option,
      //   stafflogin,
      //   user_list,
      //   error_boundary
    })
  );

const store = createRootReducer();
export default store;

export type ReduxState = {};

export type ReduxAction = AppActions | Action;
