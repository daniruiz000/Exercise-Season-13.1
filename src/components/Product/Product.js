import React from "react";
import { useParams } from "react-router-dom";
import { products } from '../../products'


const Product = (props)=>{

    const {id} = useParams();

    return(
        <div>
            <h1>Detalle del producto</h1>
            <img src={products[id].image} alt={products[id].name}/>
            <p>{products[id].name}</p>
            <p>{products[id].price}</p>
            <p>{products[id].description}</p>
            <button onClick={()=>props.setAuthInfo({...props.authInfo, favoriteProduct: products[id].name})}>Marcar como favorito</button>
        </div>
    )
}

export default Product;