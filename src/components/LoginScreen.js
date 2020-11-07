import React, {useRef}from 'react'
import { useAuth } from '../contexts/AuthContext';

function LoginScreen() {

    const { login } = useAuth();
    const input1Ref = useRef();
    const input2Ref = useRef();

    const getLogin = () => {
        login(input1Ref.current.value, input2Ref.current.value);
    }

    return (
        <div>
            <div>Kullanıcı Adı</div>
            <input ref={input1Ref} />
            <div>Şifre</div>
            <input ref={input2Ref} />
            <button onClick={getLogin}>Giriş Yap</button>
        </div>
    )
}

export default LoginScreen;