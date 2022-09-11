import * as React from "react";
import { History } from "history";
import { Router, UNSAFE_NavigationContext } from "react-router-dom";

type RouterProps = {
  basename?: string;
  history: History;
};

/**
 * @deprecated useHistoryは死にました
 */
export const useHistoryCompat = () => {
  const navigator = React.useContext(UNSAFE_NavigationContext);
  // あまりよくないけどv6.1.1時点ではこのキャストは通る
  return navigator.navigator as History;
};

export const RouterCompat: React.FC<RouterProps> = ({
  basename,
  children,
  history
}) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};
