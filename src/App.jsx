import { Layout, Menu } from 'antd';
import { useState } from 'react';
import SiderMenu from './components/SiderMenu';
import PageHeader from './components/PageHeader';
import MainContent from './components/MainContent';



const { Sider} = Layout;

function App() {
  // useState 是 React 的状态钩子，'alist' 是初始状态值，表示默认选中的菜单项
  const [current, setCurrent] = useState('alist');

  // 这个映射用于根据 current 状态值动态确定 iframe 加载的地址
  const urlMap = {
    alist: '/test.html',
    ddnsgo: '/test.html',
    clash: '/test.html',
  };

  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      <Sider width={200} style={{ background: '#001529' }}>
        <SiderMenu current={current} setCurrent={setCurrent} /> {/* 侧边栏菜单组件 */}
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <PageHeader />
        <MainContent url={urlMap[current]} /> {/* 主内容区域，加载不同的页面 */}
      </Layout>
    </Layout>
  );
}

export default App;