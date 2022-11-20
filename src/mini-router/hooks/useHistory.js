/**
 * 功能描述: 用来获取history
 * 实现: 获取上下文中的history对象
 **/

import { useContext } from "react";
import { RouterContext } from "../component/context";

export default function useHistory() {
  return useContext(RouterContext).history;
}
