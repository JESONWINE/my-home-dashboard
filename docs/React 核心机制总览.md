React 核心机制总览

本篇文档系统梳理 React 的核心运行机制、使用方式与设计理念，适合刚刚学完 HTML、CSS 和 JavaScript 后开始学习 React 的开发者。

🎯 学习目标

理解 React 是什么，它解决了什么问题

掌握函数组件的定义与使用方式

熟悉组件生命周期（含 Hooks）

学会状态管理（useState、props 传递）

理解 JSX 与虚拟 DOM 渲染机制

1️⃣ React 是什么？

React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发。

🔧 核心理念：

一切 UI 都是组件

状态驱动视图（State Driven UI）

单向数据流（数据从父到子传递）

2️⃣ JSX：HTML 与 JavaScript 的融合

JSX 是 JavaScript 的语法扩展，可以让我们在 JS 中直接书写类 HTML 的结构。

const title = <h1>Hello React</h1>;

注意：JSX 最终会被转换为 JavaScript 函数调用（React.createElement）。

3️⃣ 函数组件 Function Component

React 推荐使用函数组件来构建界面，它本质上是一个 JS 函数，返回 JSX。

function Hello() {
  return <h2>Hello, World!</h2>;
}

组件名必须是大写开头（React 以此区分 HTML 标签与组件）

🔁 组件嵌套

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

4️⃣ 状态管理：useState + props

🧠 什么是 useState？

在 React 中，组件是用来显示 UI 的，而 UI 通常会根据某些「状态」的变化而变化。

useState 是 React 提供的一个 Hook（钩子），让你在函数组件中使用状态。

🧪 举个例子：

💡 补充语法解析：

const [count, setCount] = useState(0);

这是 ES6 的数组解构赋值语法。

useState(0) 实际返回的是一个数组：[当前状态值, 设置状态的函数]

所以这句代码就等价于：

const arr = useState(0);
const count = arr[0];
const setCount = arr[1];

这是 React 设计上的约定，可以通过解构一行同时获得状态值和更新函数。

const [count, setCount] = useState(0);

你可以这样理解它：

名称

含义说明

count

当前的状态值（比如计数器的值）

setCount

改变状态的函数（比如给 count 加 1）

useState(0)

初始值是 0

⛓️ 状态驱动视图：为什么需要 useState

在传统 JavaScript 中你可能是这样写的：

<p id="text">0</p>
<button onclick="change()">加一</button>
<script>
  let count = 0;
  function change() {
    count++;
    document.getElementById('text').innerText = count;
  }
</script>

👉 在 React 里，这一切状态管理、更新 DOM 的操作都被封装在了 useState 里面，你只需要更新数据，React 会帮你自动刷新界面。

🔁 例子完整流程：

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 初始化 count = 0

  return (
    <button onClick={() => setCount(count + 1)}>
      Count is {count}
    </button>
  );
}

点击流程：

💬 setCount(count + 1) 并不会立刻让 count 变量本身改变，而是告诉 React：“请把 count 更新为新的值”，React 会：

暂存这个更新（在内存中）

重新执行组件函数

把新的 count 值返回给 useState()

所以 useState 返回的值会随着更新而变化，但它并不会在 setCount() 调用后立即变。你可以把它理解成“下一轮渲染时的值”。

你点按钮，触发 setCount(count + 1)

React 会自动更新 count 的值

组件重新渲染（自动更新到页面）

你看到按钮文本发生了变化

🔀 多个 useState 示例：管理多个状态值

你可以在一个组件中同时使用多个 useState，每个都是独立的。

import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="请输入姓名"
      />
      <input
        type="number"
        value={age}
        onChange={e => setAge(Number(e.target.value))}
        placeholder="请输入年龄"
      />
      <p>你好 {name}，你今年 {age} 岁</p>
    </div>
  );
}

name 和 age 是两个独立的状态，不会互相影响

每次你输入，都会通过 setName() 和 setAge() 更新状态并刷新页面

✅ 总结

特性

说明

useState

用于声明和操作本地状态

响应式

状态变了，React 自动重新渲染

声明式代码

不用操作 DOM，直接写逻辑

多状态管理

每个 useState() 都是独立的状态

props：组件间传值与事件回传

🧭 图示理解

+------------+        props: name, onClick         +-----------+
|  Parent    | ----------------------------------> |   Child   |
|            |                                     |           |
|            | <---------- 调用 onClick() -------- |           |
+------------+             (事件回传)             +-----------+

🔁 数据流与事件流

父组件通过 props 把 数据（name） 和 函数（onClick）传递给子组件。

子组件使用这些 props 显示信息（如 name），并在点击时 调用传下来的函数（onClick）。

父组件接收到函数被调用的“通知”，可以执行任意逻辑（如修改父状态）。

在 React 中，组件之间通过 props（属性） 实现信息传递。

✅ 父传子：传递数据

function Hello({ name }) {
  return <p>Hello, {name}</p>;
}

function App() {
  return <Hello name="Alice" />;
}

父组件 <App /> 将 name 传给子组件 <Hello />，子组件通过 props.name 使用它。

🔁 子传父：回传事件（函数）

子组件不能直接改父组件的数据，但可以通过调用父组件传下来的函数来“通知”父组件。

function Child({ onClick }) {
  return <button onClick={onClick}>点击我</button>;
}

function Parent() {
  const handleClick = () => {
    alert('子组件点击了按钮');
  };

  return <Child onClick={handleClick} />;
}

这叫“回调 props”，本质上是把函数当作 prop 传给子组件，子组件调用它就能通知父组件。

⚡ 小结

方向

机制

示例

父传子

props

<Child text="Hi" />

子传父

回调函数作为 prop

<Child onClick=... />

React 是单向数据流，所有数据只能从父组件往下流动，子组件如需“影响”父组件，只能通过调用函数（通知）来实现。

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

props：组件间传值

function Hello({ name }) {
  return <p>Hello, {name}</p>;
}

<Hello name="Alice" />

5️⃣ 生命周期与 Hooks

🔄 useEffect 的依赖机制详解

useEffect 是 React 中处理副作用（如：请求数据、操作 DOM、设置定时器等）的 Hook。

基本语法：

useEffect(() => {
  // 逻辑代码
}, [依赖项]);

✅ 依赖项作用

如果依赖项为空 []：只会在组件第一次挂载时运行一次。

如果依赖项中有变量：当这个变量变化时，useEffect 会重新执行。

如果没有传依赖项：每次渲染都会执行（不推荐，容易导致性能问题）。

📦 示例 1：只运行一次（组件挂载）

useEffect(() => {
  console.log('页面加载完成');
}, []);

📦 示例 2：依赖某个状态值

const [count, setCount] = useState(0);

useEffect(() => {
  console.log('count 改变了:', count);
}, [count]);

📦 示例 3：清理副作用（定时器、订阅）

useEffect(() => {
  const timer = setInterval(() => {
    console.log('定时运行');
  }, 1000);

  return () => clearInterval(timer); // 卸载时清理
}, []);

⚠️ 常见陷阱

陷阱场景

错误后果

正确做法

忘记写依赖项

每次渲染都会执行，性能差

写空数组或指定依赖

写了错误的依赖

导致 useEffect 频繁执行或遗漏更新

只写实际依赖的变量

修改 state 却又依赖该 state

容易进入死循环

确保逻辑中不无意改变依赖

✅ 小结

useEffect(fn, [])：只在第一次加载时运行

useEffect(fn, [x])：在 x 变化时运行

useEffect(fn)：每次渲染都运行（慎用）

return 清理函数：常用于取消订阅/清除定时器等

掌握这些，可以让你更高效地管理组件的生命周期副作用。

函数组件不再使用类组件的生命周期函数（如 componentDidMount），而是使用 Hook：

useEffect 示例：

import { useEffect } from 'react';

useEffect(() => {
  console.log('组件挂载');
  return () => console.log('组件卸载');
}, []); // 空数组代表仅首次运行

常见 Hooks：

useState：状态管理

useEffect：副作用处理（如请求、定时器）

useRef：获取 DOM 引用或保存变量

6️⃣ 虚拟 DOM 与渲染流程

React 使用“虚拟 DOM”保存 UI 的状态快照，在状态变化时对比前后变化（diff 算法），高效地更新真实 DOM。

优点：

减少 DOM 操作开销

自动更新视图

适合构建交互丰富的 UI

✅ 总结

概念

说明

JSX

HTML + JS 的混合语法

函数组件

推荐的组件构建方式

props

父传子数据机制

useState

本地状态管理

useEffect

组件副作用处理

虚拟 DOM

高效的 UI 渲染策略

⏭️ 推荐下一步

学习 React Router 实现页面切换

学习 Context 实现全局状态传递

学习如何使用组件库（如 Ant Design）构建复杂页面

准备好之后，我可以为你定制一套【从零开始构建完整 React 应用】的实战路径 💡

