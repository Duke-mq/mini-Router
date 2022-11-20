import React, { FC, useContext } from "react";
import { RouterContext } from "./context";
import { matchPath } from "react-router";

// export interface SwitchProps {
//   children?: React.ReactNode;
//   location?: Location;
// }

const Switch = (props) => {
  const context = useContext(RouterContext);
  const location = props.location || context.location;
  // match是用来标识是否匹配Switch
  let children, match;
  React.Children.forEach(props.children, (child) => {
    if (!match && React.isValidElement(child)) {
      const path = child.props.path;
      children = child;
      // 如果有传path属性,
      match = path
        ? matchPath(location.pathname, { ...child.props })
        : context.match;
    }
  });

  return match
    ? React.cloneElement(children, { location, computedMatch: match })
    : null;
};

export default Switch;
