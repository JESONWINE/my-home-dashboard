Ant Design 基础指南

Ant Design（简称 AntD）是由阿里巴巴 Ant Group 团队开发的一套开箱即用的 React UI 组件库。 它提供了丰富、统一、美观的 UI 组件，让开发者可以快速构建现代化、企业级后台系统。

📦 一、Ant Design 的特点

特点

说明

🎨 高质量组件

提供按钮、表格、表单、弹窗、布局等近百种组件

🧩 模块化按需加载

可以按需引入组件，减少打包体积

🌍 国际化支持

内置多语言适配机制（支持中文、英文等）

🛠️ 强大的 Form 表单系统

表单布局、校验、联动都非常强大，适合企业后台

🔄 与 React 深度结合

所有组件都是标准的 React 函数组件，易于组合扩展

🔧 二、安装与引入

✅ 安装方式（在 React 项目中）

npm install antd

✅ 引入全局样式（推荐使用 reset.css 版本）

import 'antd/dist/reset.css';

🧱 三、常用组件分类

✅ 布局类

组件

用途

Layout

页面结构容器（Header、Sider、Content）

Grid

栅格系统，布局网格

Space

控制元素之间间距

✅ 导航类

组件

用途

Menu

左侧/顶部菜单导航

Breadcrumb

面包屑导航路径

Tabs

页签切换

✅ 表单类

组件

用途

Form

表单容器组件（强大的数据管理能力）

Input / Select / Checkbox

常见表单输入项

Button

操作按钮

✅ 数据展示类

组件

用途

Table

数据表格

Card

卡片式容器（适合信息块）

Tag / Badge / Avatar

标签、状态标记、头像等装饰元素

✅ 反馈类

组件

用途

Modal

弹窗

Message

顶部通知提示（如保存成功）

Spin

加载中状态

💡 四、一个最简单的示例：使用按钮与布局

import { Layout, Button } from 'antd';

const { Header, Content, Footer } = Layout;

function DemoPage() {
  return (
    <Layout>
      <Header style={{ color: 'white' }}>这是头部</Header>
      <Content style={{ padding: 20 }}>
        <Button type="primary">点击我</Button>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2025 Created by Ant UED</Footer>
    </Layout>
  );
}

📐 六、Ant Design Layout 嵌套结构说明

在构建后台控制面板时，我们常常会使用嵌套的 Layout 组件来实现“左侧菜单 + 上方标题 + 中部内容”的结构。

✅ 结构示意：

<Layout>                      // 外层 Layout
  <Sider>...</Sider>          // 左侧菜单栏

  <Layout>                    // 内层 Layout（右半部分）
    <Header>...</Header>      // 顶部导航栏
    <Content>...</Content>    // 主体内容（可嵌入 iframe）
  </Layout>
</Layout>

📌 为什么使用嵌套 Layout？

原因

说明

左右分区

外层 Layout 将页面划分为侧边栏 + 主内容区域

上下分区

内层 Layout 继续划分顶部 + 内容

灵活扩展

可轻松添加 Footer、Tabs 等模块

🧩 典型用途

后台管理系统（如控制台仪表盘）

CMS 系统的导航与内容分区

Ant Design 推荐的 Layout 嵌套方式是非常标准且清晰的，在实际项目中几乎是后台开发的默认选择。

🔚 五、官方资源

官网文档：https://ant.design/components/overview-cn

在线组件演示：https://ant.design/components/layout-cn

GitHub 地址：https://github.com/ant-design/ant-design

AntD 是企业级前端开发中非常主流且成熟的一套解决方案，值得学习与深入。

