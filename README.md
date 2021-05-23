# Vue2.0 与 Vue3.0对比
- Vue2采用flow进行编写，而vue3采用typescript进行开发， 对typescript支持更友好
- 源码体积优化移出部分API,使用tree-shaking
- 数据劫持优化，Vue3采用proxy,性能大大提升
- 编译优化，vue3实现了静态模板分析，重写diff算法
- CompositionAPI,整合业务代码的逻辑，提取公共逻辑（vue2采用mixin，命名冲突来源不清晰）
- 自定义渲染器，可以用来创建自定义的渲染器，改写vue底层逻辑
- 新增Fragement、Teleport、Suspense组件

- reactive,ref,toRef,toRefs
- toRef, 把对象上对应key的值，转化为ref类型，内部就是代理
- toRefs, 把对象上的每个key的值，都转化为ref类型, 相当于循环调用toRef
```ts
let state = {name: 'zx'};
let name = toRef(state, 'name');

console.log(name.value);
```



## 被移除或者不兼容的属性
- $listeners

    在 Vue 3 的虚拟 DOM 中，事件监听器现在只是以 on 为前缀的 attribute，这样就成了 $attrs 对象的一部分，因此 $listeners 被移除了。

- v-if,v-for 优先级

    2.x 版本中在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用。
    3.x 版本中 v-if 总是优先于 v-for 生效。

- $on，$off 和 $once 实例方法已被移除，应用实例不再实现事件触发接口
- 过滤器， 从 Vue 3.0 开始，过滤器已删除，不再支持。