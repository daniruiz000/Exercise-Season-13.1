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
                    {authInfo.favoriteProduct ? <p>Producto favorito: {authInfo.favoriteProduct}</p>
                    :<p></p>}
                    
                </>
                : <Navigate to='/login' replace={true} />
            }
        </div>

    )
}

export default MyAcount;