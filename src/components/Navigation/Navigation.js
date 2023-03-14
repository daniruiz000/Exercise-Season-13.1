import React from "react";
import { NavLink, useNavigate } from "react-router-dom";



const Navigation = () => {

    const navigate = useNavigate()

    return (
        <nav className='navigation'>
            <button className='navigation__link' onClick={()=>navigate(-1)}>ATRÁS</button>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>HISTORIAS DE EXITO</NavLink>
            <NavLink to='/product-list'>PRODUCTOS</NavLink> 
            <NavLink to='login'>LOGIN</NavLink>
            <NavLink to='my-acount'>MY ACOUNT</NavLink>
            <button className='navigation__link' onClick={()=>navigate(+1)}>ADELANTE</button>
        </nav>
    )
}
export default Navigation;