import React from "react";
import form from "antd"
const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Form>
            <div>
                <label htmlFor = "user-id">아이디</label>
                <br />
                <input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor = "user-password">비밀번호</label>
                <br />
                <input name="user-password" value={password} onChange={onChangePassword} required />
            </div>
        </Form>
    );
}

export default LoginForm;