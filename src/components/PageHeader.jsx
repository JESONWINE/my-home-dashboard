import {Layout} from "antd";

function PageHeader() {
  return (
    <Layout.Header style={{ color: "white", fontSize: 20, height: 64, padding: "0 16px" }}>
      家庭控制面板
    </Layout.Header>
  );
}

export default PageHeader;
// PageHeader 组件用于渲染页面的头部，包含标题和样式设置