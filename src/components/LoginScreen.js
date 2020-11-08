import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext';

function LoginScreen() {

    const { login, register } = useAuth();
    const input1Ref = useRef();
    const input2Ref = useRef();

    const getLogin = () => {
        login(input1Ref.current.value, input2Ref.current.value);
    }

    const getRegister = () => {
        register(input1Ref.current.value, input2Ref.current.value);
    }

    const rootDivStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <div style={rootDivStyle} >
            <div>
                <div>Kullanıcı Adı</div>
                <input ref={input1Ref} />
                <div>Şifre</div>
                <input ref={input2Ref} type="password" />
                <br />
                <button onClick={getLogin}>Giriş Yap</button>
                <button onClick={getRegister}>Kayıt Ol</button>
            </div>
        </div>
    )
}

export default LoginScreen;