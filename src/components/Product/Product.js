import React from "react";
import { useParams } from "react-router-dom";
import { products } from '../../products'
import { AuthContext } from "../../App";
import './Product.css'

const Product = ({login})=>{

    const {id} = useParams();
    const authInfo = React.useContext(AuthContext)
    return(
        <div className="product">
            <h1>Detalle del producto</h1>
            <img src={products[id].image} alt={products[id].name}/>
            <p>{products[id].name}</p>
            <p>{products[id].price}</p>
            <p>{products[id].description}</p>
            <button onClick={()=>login({...authInfo, favoriteProduct: products[id].name})}>Marcar como favorito</button>
        </div>
    )
}

export default Product;