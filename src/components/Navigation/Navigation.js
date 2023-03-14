import React from "react";
import { NavLink, useNavigate } from "react-router-dom";



const Navigation = () => {

    const navigate = useNavigate()

    return (
        <nav className='navigation'>
            <button className='navigation__link' onClick={()=>navigate(-1)}>Atras</button>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/product-list'>PRODUCTOS</NavLink> 
            <NavLink to='login'>Login</NavLink>
            <NavLink to='my-acount'>My Acount</NavLink>
            <button className='navigation__link' onClick={()=>navigate(+1)}>Adelante</button>
        </nav>
    )
}
export default Navigation;