import React from "react";
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";

const MyAcount = ({login}) => {

    const authInfo = React.useContext(AuthContext)
    
    return (

        <div className="page">
            <h1>MY ACOUNT</h1>
            {authInfo && authInfo.user === 'dani' && authInfo.password === '1234'?
                <>
                    <p className="page__imp">Usuario: {authInfo.user} </p>
                    <p className="page__imp">Password: {authInfo.password} </p>
                    <button onClick={()=>login({...authInfo, user: null, password: null})}>Logout</button>
                    {authInfo.favoriteProduct ?
                        <>
                            <p className="page__imp">Producto favorito: {authInfo.favoriteProduct}</p>
                            <button onClick={()=>login({...authInfo, favoriteProduct:null})}>Borrar favorito</button>
                        </>
                        : <p></p>}
                </>
                : <Navigate to='/login' replace={true} />
                
            }
        </div>

    )
}

export default MyAcount;