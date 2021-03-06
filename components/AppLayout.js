import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import "antd/dist/antd.css"
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>트위티</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href ="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign: 'middle'}} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
                { children }
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn? <UserProfile/>: <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    { children }
                 </Col>
                <Col xs={24} md={6}>
                   오른쪽메뉴
                </Col>
            </Row>
        </>
    )

}

AppLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default AppLayout;
