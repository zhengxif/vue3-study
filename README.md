# Vue2.0 与 Vue3.0对比
- Vue2采用flow进行编写，而vue3采用typescript进行开发， 对typescript支持更友好
- 源码体积优化移出部分API,使用tree-shaking
- 数据劫持优化，Vue3采用proxy,性能大大提升
- 编译优化，vue3实现了静态模板分析，重写diff算法
- CompositionAPI,整合业务代码的逻辑，提取公共逻辑（vue2采用mixin，命名冲突来源不清晰）
- 自定义渲染器，可以用来创建自定义的渲染器，改写vue底层逻辑
- 新增Fragement、Teleport、Suspense组件