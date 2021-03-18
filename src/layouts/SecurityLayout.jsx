import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import './SecurityLayout.scss'
const { Header, Content, Footer, Sider } = Layout;

function SecurityLayout({ children }) {
	return (
		<div className="security-layout">
        <Layout>
            <Sider
            className = "security-layout-slider"
            style={{
                height: '100vh',
                position: 'fixed',
                left: 0
            }}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
                </Menu.Item>
                <Menu.Item key="4" icon={<BarChartOutlined />}>
                nav 4
                </Menu.Item>
                <Menu.Item key="5" icon={<CloudOutlined />}>
                nav 5
                </Menu.Item>
                <Menu.Item key="6" icon={<AppstoreOutlined />}>
                nav 6
                </Menu.Item>
                <Menu.Item key="7" icon={<TeamOutlined />}>
                nav 7
                </Menu.Item>
                <Menu.Item key="8" icon={<ShopOutlined />}>
                nav 8
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background-header" style={{ padding: 0 }} > hello</Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                ...
                <br />
                Really
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                long
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                ...
                <br />
                content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    	</div>  
	);
}

export default SecurityLayout;
