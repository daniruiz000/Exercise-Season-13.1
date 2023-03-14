import React from "react";
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";

const MyAcount = () => {

    const authInfo = React.useContext(AuthContext)
    
    return (

        <div className="page">
            <h1>MyAcount</h1>
            {authInfo && authInfo.user ?
                <>
                    <p>Usuario: {authInfo.user} </p>
                    <p>Producto favorito: {authInfo.favoriteProduct}</p>
                </>
                : <Navigate to='/login' replace={true} />
            }
        </div>

    )
}

export default MyAcount;