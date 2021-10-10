import { Action } from "redux";

export enum ActionNames {
  SET_SIGNIN = "app/signin"
}

interface SetSigninAction extends Action {
  type: ActionNames.SET_SIGNIN;
  signin: boolean;
}

export const setSignin = (signin: boolean): SetSigninAction => ({
  type: ActionNames.SET_SIGNIN,
  signin
});

export type AppActions = SetSigninAction;

export interface AppState {
  signin: boolean;
  hamMenuVisible: boolean;
}

export const initialState: AppState = {
  signin: false,
  hamMenuVisible: true
};

export default function reducer(
  state: AppState = initialState,
  action: AppActions
): AppState {
  switch (action.type) {
    case ActionNames.SET_SIGNIN:
      return { ...state, signin: action.signin };
    default:
      return state;
  }
}
