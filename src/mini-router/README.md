关于路由的相关知识文章
https://juejin.cn/post/6993840419041706014
history 库 源码分析

createBrowserHistory:用于创建 history 模式下的会话历史管理实例
createHashHistory:用于创建 hash 模式下的会话历史管理实例
createMemoryHistory:用于无浏览器环境下，例如 React Native 和测试用例

1.createBrowserHistory 创建会话管理实例,其中的结构是一个对象,
其中比较重要的的是 listen,location,push,forward,go,action.

listen 方法是用来监听当前路由 history.location 变换,传入一个回调函数,形参为 history 对象,返回一个解除监听的函数，该函数执行后解除对路由变化的监听。

go:作用是基本当前历史条目在历史栈中的位置去前进或者后退到附近的历史条目上:用法是 history.go(-1)
push: push 就是把新的历史条目添加到历史栈上

location 是一个纯对象，代表当前路由地址，包含以下属性：其中 pathname 比较重要
pathname：等同于 window.location.pathname
search：等同于 window.location.search
hash：等同于 window.location.hash
state：当前路由地址的状态，类似但不等于 window.history.state
key：代表当前路由地址的唯一值
