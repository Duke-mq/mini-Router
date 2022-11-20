import { useEffect } from "react";
import { roothistory } from "../component/router";
/**
 * 功能描述: 当路由变化时执行传入的回调函数
 * 实现: 获取上下文中的history对象
 **/
const useListen = (cb) => {
  useEffect(() => {
    if (!roothistory) {
      return () => {};
    }
    const unlisten = roothistory.listen(({ location, action }) => {
      cb && cb(location);
    });
    return function () {
      unlisten && unlisten();
    };
  }, []);
};

export default useListen;
