My Home Dashboard

一个基于 React + Vite + Ant Design 的家庭控制面板项目，用于统一管理 Alist、DDNS-Go、Clash 等服务。

🚀 技术栈

React 18

Vite

Ant Design

📦 安装与启动

npm install
npm run dev

浏览器访问：http://localhost:5173

📁 项目结构

my-home-dashboard/
├── public/
│   └── test.html                  # 用于 iframe 测试
├── src/
│   ├── components/               # 拆分后的功能组件
│   │   ├── SiderMenu.jsx         # 左侧导航菜单
│   │   ├── PageHeader.jsx        # 顶部标题栏
│   │   └── MainContent.jsx       # 中间 iframe 区域
│   ├── App.jsx                   # 页面结构入口
│   └── main.jsx                  # React 挂载入口
├── package.json
└── README.md                     # 当前文档

✅ 功能模块

左侧导航栏（可切换不同面板）

顶部标题栏（显示系统名称）

中部 iframe 嵌入实际服务页面（支持动态切换）

🔧 组件拆分说明

文件名

职责说明

SiderMenu.jsx

管理菜单项与交互逻辑

PageHeader.jsx

顶部展示标题或工具栏

MainContent.jsx

显示选中服务的 iframe 页面

App.jsx

页面结构整合与状态管理

📌 后续计划（TODO）



项目持续更新中。如果你也想定制自己的家庭服务管理平台，欢迎参考本项目结构。

📚 推荐文档目录结构

建议将更多项目说明文档集中存放于 docs/ 目录，便于后期维护与扩展：

my-home-dashboard/
├── docs/
│   ├── 组件拆分实战指南.md
│   ├── React 核心机制总览.md
│   ├── iframe 接入服务说明.md
│   ├── 项目部署与运行流程.md
│   └── TODO 待办计划.md
├── README.md

📂 文档说明

文件名

内容简介

组件拆分实战指南.md

各组件职责、如何抽离、如何组合 App.jsx

React 核心机制总览.md

JSX、useState、props、生命周期等基础机制

iframe 接入服务说明.md

接入 Alist、Clash、DDNSGo 等服务的配置方法

项目部署与运行流程.md

启动命令、构建打包、服务器部署说明

TODO 待办计划.md

功能迭代与开发计划记录

文档可用于团队协作学习，也方便未来转为线上文档或网站形式（如 Docute、VuePress、Docusaurus 等）。

