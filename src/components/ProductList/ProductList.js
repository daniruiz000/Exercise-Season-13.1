import { NavLink } from 'react-router-dom';
import { products } from '../../products'

const ProductList = () => {

    return (
        <div>
            {products.map(product => {

                return (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name}></img>
                        <p>{product.name}</p>
                        <NavLink to={'/product-detail/'+ product.id }>Ver producto</NavLink>
                        <p>{'/product-detail/'+ product.id}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;