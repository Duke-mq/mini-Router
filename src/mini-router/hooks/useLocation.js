/**
 * 功能描述: 用来获取location
 * 实现: 获取上下文中的location对象
 **/

import { useContext } from "react";
import { RouterContext } from "../component/context";

export default function useLocation() {
  return useContext(RouterContext).location;
}
