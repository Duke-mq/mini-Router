import React, { useEffect, useMemo, useState, FC } from "react";
import { BrowserHistory, createBrowserHistory as createHistory } from "history";
import { RouterContext } from "./context";
export let roothistory= null;

// interface RouterProps {
//   children: React.ReactNode;
// }
const Router = ({ children }) => {
  const history = useMemo(() => {
    roothistory = createHistory();
    return roothistory;
  }, []);
  const [location, setLocation] = useState(history.location);
  useEffect(() => {
    const unlisten = history.listen(({location}) => {
      setLocation(location);
    });
    return () => {
      //组件卸载取消监听
      unlisten && unlisten();
    };
  }, [history, setLocation]);
  const passedContextValue = {
    location,
    history,
    match: {
      path: "/",
      url: "/",
      params: {},
      isExact: location.pathname === "/",
    },
  };
  return (
    <RouterContext.Provider value={passedContextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
