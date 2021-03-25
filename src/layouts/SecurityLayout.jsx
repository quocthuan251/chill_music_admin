import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import HeaderGlobal from '../components/HeaderGlobal'
import './SecurityLayout.scss'
const { Header, Content, Sider } = Layout

function SecurityLayout({ children }) {
    return (
        <div className="security-layout">
            <Layout>
                <Sider
                    className="security-layout-slider"
                    style={{
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<BarChartOutlined />}>
                            Thống kê
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            Bài hát
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            Tài nguyên
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            Người dùng
                        </Menu.Item>
                        <Menu.Item key="5" icon={<CloudOutlined />}>
                            Dữ liệu
                        </Menu.Item>
                        <Menu.Item key="6" icon={<TeamOutlined />}>
                            Ca sỹ
                        </Menu.Item>
                        <Menu.Item key="7" icon={<ShopOutlined />}>
                            Nhà phát hành
                        </Menu.Item>
                        <Menu.Item key="8" icon={<AppstoreOutlined />}>
                            Thông báo
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background-header" style={{ padding: 0 }}>
                        {' '}
                        <HeaderGlobal />
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default SecurityLayout
