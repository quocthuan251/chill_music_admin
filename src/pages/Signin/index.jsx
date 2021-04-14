import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import logo from '../../assets/images/logo.svg'
import SigninBackgroud from './components/SigninBackgroud'
import './Signin.scss'
export default function SigninFeature() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values)
    }

    return (
        <div>
            <SigninBackgroud></SigninBackgroud>

            <div className="signin-feature-container">
                <div>
                    <img src={logo} alt="" className="signin-feature-header-logo" />
                    <div className="signin-feature-header-title">Trang quản lý Chill music</div>
                </div>

                <Card
                    title="Đăng nhập"
                    bordered={false}
                    className="signin-feature-card-box"
                    style={{ backgroundColor: '#000D0D', color: '#FFFFFF' }}
                >
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        size="large"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Nhớ mật khẩu</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="signin-feature-form-button-submit">
                                Đăng nhập Test
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}
