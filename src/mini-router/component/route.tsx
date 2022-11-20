import React, { FC, ReactElement, useContext } from "react";
import { RouterContext } from "./context";
import { matchPath } from "react-router";
interface RouteProps {
  children: React.ReactNode;
  path: string;
  component: ReactElement;
  location: Location;
  [key: string]: any;
}
const Route: FC<RouteProps> = (props) => {
  const context = useContext(RouterContext);
  const location = props.location || context.location;
  const match = props.computedMatch
    ? props.computedMatch
    : props.path
    ? matchPath(location.pathname, props.path)
    : context.match;
  const newRouterProps = {
    ...context,
    location,
    match,
  };
  console.log("newRouterProps", newRouterProps);
  /*
    ToDo:react-router-dom v6.0以上的版本props只有element,或者用api去创建Router
  */
  let renderChildren = null;
  let { children, component, render } = props;
  if (Array.isArray(children) && children.length === 0) children = null;
  if (children) {
    // 不考虑children是function的情况
    // renderChildren =
    //   typeof children === "function" ? children(newRouterProps) : children;
    renderChildren = children;
  } else if (component) {
    renderChildren = React.cloneElement(component, newRouterProps);
  } else if (render) {
    renderChildren = render(newRouterProps);
  }

  return (
    <RouterContext.Provider value={newRouterProps}>
      {children}
    </RouterContext.Provider>
  );
};

export default Route;
