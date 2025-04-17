import { Layout } from "antd";
function MainContent({ url }) {
  return (
    <Layout.Content style={{ flex: 1 }}>
      <iframe
        src={url} // 根据 current 值动态切换 iframe 页面
        title="panel-frame"
        style={{
          width: "100%",
          height: "calc(100vh - 64px)",
          border: "none",
        }}
      />
    </Layout.Content>
  );
}
export default MainContent;
// MainContent 组件用于渲染页面的主要内容区域，包含一个 iframe 用于加载不同的页面