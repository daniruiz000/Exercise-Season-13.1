import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../App"

const Login = ({ login }) => {

    const authInfo = React.useContext(AuthContext);
    const inputUserRef = React.useRef();
    const inputPasswordRef = React.useRef();

    const doLogin = (authInfo)=>{
        login({ ...authInfo, user: inputUserRef.current.value,password:inputPasswordRef.current.value})
        inputPasswordRef.current.value = ''
        inputUserRef.current.value = ''
    }


    return (

        <div className="page">
            <h1>LOGIN</h1>
            {authInfo && authInfo.user === 'dani' && authInfo.password === '1234' ?
                <Navigate to='/my-acount' replace={true} />
                : 
                <div className="page__log">
                    <p>Usuario:</p>
                    <input type='text' placeholder="Introduce tu usuario" ref= {inputUserRef}></input>
                    <p>Clave:</p>
                    <input type='password' placeholder="Introduce tu clave" ref= {inputPasswordRef}></input>
                    <button onClick={() => doLogin(authInfo)}>LOGIN</button>
                
                </div>
            }
        </div>

    )
}

export default Login;