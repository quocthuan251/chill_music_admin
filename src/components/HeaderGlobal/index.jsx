import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import React from 'react'
function HeaderGlobal() {
    const menu = (
        <Menu>
            <Menu.Item key="setting:1" icon={<UserOutlined />}>
                Thông tin tài khoản
            </Menu.Item>
            <Menu.Item key="setting:2" icon={<SettingOutlined />}>
                Cài đặt
            </Menu.Item>
            <Menu.Item key="setting:3" icon={<LogoutOutlined />}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    )
    return (
        <div className="header-container">
            {/* <Menu onClick={handleClick}  mode="horizontal">
					
				<SubMenu key="sub4" icon={<SettingOutlined />} title="Quocthuan">
								<Menu.Item key="setting:1" icon={<UserOutlined />}>Thông tin tài khoản</Menu.Item>
								<Menu.Item key="setting:2" icon={<SettingOutlined />}>Cài đặt</Menu.Item>
								<Menu.Item key="setting:3" icon={<LogoutOutlined />}>Đăng xuất</Menu.Item>
				</SubMenu>
 			 </Menu> */}
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    Hover me <SettingOutlined />
                </a>
            </Dropdown>
        </div>
    )
}

export default HeaderGlobal
