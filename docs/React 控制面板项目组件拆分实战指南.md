# React 控制面板项目组件拆分实战指南

> 本文档将指导你如何将一个使用 Ant Design 构建的控制面板 React 项目，按照模块职责进行组件拆分，提高代码可维护性与可读性。

---

## 🎯 学习目标

- 掌握 React 项目中组件拆分的基本思想
- 理解如何将 UI 布局结构化为多个子组件
- 学会在不同组件间传递 props（状态与方法）
- 构建一个结构清晰、可复用、便于维护的控制面板应用架构

---

## 📁 目录结构

```
src/
├── components/
│   ├── SiderMenu.jsx         // 左侧导航栏组件
│   ├── PageHeader.jsx        // 顶部栏组件
│   └── MainContent.jsx       // 内容展示区域（含 iframe）
├── App.jsx                   // 页面组合入口
└── main.jsx                  // React 挂载点
```

---

## 📌 组件一：SiderMenu.jsx
```jsx
// src/components/SiderMenu.jsx
import { Menu } from 'antd';

function SiderMenu({ current, setCurrent }) {
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[current]}
      onClick={({ key }) => setCurrent(key)}
      items={[
        { key: 'alist', label: 'Alist' },
        { key: 'ddnsgo', label: 'DDNS-Go' },
        { key: 'clash', label: 'Clash 控制台' },
      ]}
    />
  );
}

export default SiderMenu;
```

### ✅ 用途说明
- 管理侧边栏导航项的展示与交互
- 点击菜单项时，更新当前选中的 key

---

## 📌 组件二：PageHeader.jsx
```jsx
// src/components/PageHeader.jsx
import { Layout } from 'antd';

function PageHeader() {
  return (
    <Layout.Header style={{ color: 'white', fontSize: 20, height: 64, padding: '0 16px' }}>
      家庭控制面板
    </Layout.Header>
  );
}

export default PageHeader;
```

### ✅ 用途说明
- 显示统一的应用标题或工具栏
- 可扩展加入用户信息、退出按钮等内容

### 📦 模块导出解释

```js
export default PageHeader;
```
这行代码表示将 `PageHeader` 组件作为模块的**默认导出**，它的意义在于：

- 使得其他文件可以通过下面方式导入：
  ```js
  import PageHeader from './components/PageHeader';
  ```
- 不使用大括号，简化调用：`default` 表示这个文件最主要导出的内容。

#### 🧠 默认导出 vs 具名导出
| 类型         | 写法                         | 导入方式                          |
|--------------|------------------------------|-----------------------------------|
| 默认导出     | `export default PageHeader`  | `import PageHeader from ...`      |
| 具名导出     | `export { PageHeader }`      | `import { PageHeader } from ...`  |

React 项目中每个组件单独放在一个文件，并用 `export default` 导出，是一种常见且推荐的实践。或工具栏
- 可扩展加入用户信息、退出按钮等内容

---

## 📌 组件三：MainContent.jsx
```jsx
// src/components/MainContent.jsx
import { Layout } from 'antd';

function MainContent({ url }) {
  return (
    <Layout.Content style={{ flex: 1 }}>
      <iframe
        src={url}
        title="panel-frame"
        style={{
          width: '100%',
          height: 'calc(100vh - 64px)',
          border: 'none',
        }}
      />
    </Layout.Content>
  );
}

export default MainContent;
```

### ✅ 用途说明
- 承载主要的 iframe 内容展示区域
- 可替换为内部路由、动态内容等

---

## 📌 主文件：App.jsx（整合所有组件）
```jsx
// src/App.jsx
import { Layout } from 'antd';
import { useState } from 'react';
import SiderMenu from './components/SiderMenu';
import PageHeader from './components/PageHeader';
import MainContent from './components/MainContent';

const { Sider } = Layout;

function App() {
  const [current, setCurrent] = useState('alist');
  const urlMap = {
    alist: '/test.html',
    ddnsgo: '/test.html',
    clash: '/test.html',
  };

  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      <Sider width={200} style={{ background: '#001529' }}>
        <SiderMenu current={current} setCurrent={setCurrent} />
      </Sider>

      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <PageHeader />
        <MainContent url={urlMap[current]} />
      </Layout>
    </Layout>
  );
}

export default App;
```

---

## ✅ 拆分优势总结

| 拆分效果 | 好处 |
|----------|------|
| UI 结构清晰 | 每个部分职责单一、维护简单 |
| 易于复用 | 组件可在多个页面中复用，如 Header、Menu |
| 易于调试 | 每个组件独立，便于定位错误 |
| 易于测试 | 组件化结构便于单元测试与样式覆盖 |

---

## ✅ 接下来的建议方向

- 为 `MainContent` 添加 loading 和 fallback 状态
- 添加 404 页面或错误提示支持
- 将菜单数据抽离为独立配置文件（如 menu.js）
- 接入实际服务（Alist、Clash、DDNSGo）并配置 Nginx 反向代理

准备好继续哪一项，我就带你进入下一阶段 🚀
