import { App } from "./App";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxAction, ReduxState } from "../../Store";
import { push } from "connected-react-router";
// import { isSignin } from "../../lib/Auth0";
// import { PageName } from "../../Constants/PageName";

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public async init() {
    console.log("aaaa");
    // const page = location.hash.split("?")[0].replace(/^#\//, "");
    // const initExcludePath: string[] = [PageName.RESULT_SHARE];
    // if (initExcludePath.includes(page)) {
    //   return;
    // }
    // if (!(await isSignin())) {
    //   this.dispatch(push(`/${PageName.STAFF_LOGIN}`));
    // }
  }
}
export default connect(
  (state: ReduxState) => ({ value: state.app }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(App);
