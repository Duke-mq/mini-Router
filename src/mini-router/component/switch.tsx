import React, { FC, CSSProperties, ReactElement, useContext } from "react";
import { RouterContext } from "./context";

export interface SwitchProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const Switch: FC<SwitchProps> = (props) => {
  const { className, style } = props;
  const context = useContext(RouterContext);
};

export default Switch;
