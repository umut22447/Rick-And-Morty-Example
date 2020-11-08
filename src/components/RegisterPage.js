import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function RegisterPage() {

    const { register } = useAuth();
    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();

    const getRegister = () => {
        if (input2Ref.current.value === input3Ref.current.value) {
            register(input1Ref.current.value, input2Ref.current.value);
            window.location.href = "/";
        }
        else {
            alert("Şifreler Uyuşmuyor !!")
        }
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
                <div>Şifre Tekrar</div>
                <input ref={input3Ref} type="password" />
                <br />
                <button onClick={getRegister}>Kayıt Ol</button>
                <br />
                <Link to="/">
                    <a href="/">Zaten Hesabım Var</a>
                </Link>
            </div>
        </div>
    )
}
