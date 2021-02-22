
import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
const AppLayout = ({children}) => {
    return (
        <div>
            <Link href ="/"><a>트위티</a></Link>
            <Link href ="/profile"><a>프로필</a></Link>
            <Link href ="/signup"><a>회원가입</a></Link>
            <div>공통메뉴</div>
            {children}
        </div>
    )
}
// 느린현상  production 모드로 변환하면 느린거 없어짐
AppLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default AppLayout;
