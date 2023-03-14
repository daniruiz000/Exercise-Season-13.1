import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../App"

const Login = ({login}) => {

    const authInfo = React.useContext(AuthContext)
    
    return (

        <div className="page">
            <h1>Login</h1>
            {authInfo && authInfo.user ?
                <Navigate to ='/my-acount' replace={true}/>
                : <button onClick={()=>login({user: 'Dani', favoriteProduct:authInfo.favoriteProduct})}>Login</button>
            }
        </div>

    )
}

export default Login;