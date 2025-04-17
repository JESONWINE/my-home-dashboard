import { Menu } from "antd";

function SiderMenu({ current, setCurrent }) {
return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[current]} // 高亮当前选中的菜单项
      onClick={({ key }) => setCurrent(key)} // 点击菜单项时更新状态值
      items={[
        { key: "alist", label: "Alist" },
        { key: "ddnsgo", label: "DDNS-Go" },
        { key: "clash", label: "Clash 控制台" },
      ]}
    />
  );
}
export default SiderMenu;
// SiderMenu 组件用于渲染侧边栏菜单，接收 current 和 setCurrent 作为 props