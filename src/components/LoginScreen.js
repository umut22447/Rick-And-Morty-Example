import React, { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'

function LoginScreen() {

    const { login } = useAuth();
    const input1Ref = useRef();
    const input2Ref = useRef();

    const getLogin = () => {
        login(input1Ref.current.value, input2Ref.current.value);
    }

    const rootDivStyle = {
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const insideDivStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }

    return (
        <div style={rootDivStyle} >
            <div>
                <h1>Rick And Morty Login Page</h1>
                <div style={insideDivStyle}>
                    <div>Kullanıcı Adı</div>
                    <input ref={input1Ref} />
                    <div>Şifre</div>
                    <input ref={input2Ref} type="password" />
                    <br />
                    <div>
                        <button onClick={getLogin}>Giriş Yap</button>
                        <Link to="/register">
                            <button>Kayıt Ol</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginScreen;