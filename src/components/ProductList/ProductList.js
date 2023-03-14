import { NavLink } from 'react-router-dom';
import { products } from '../../products'
import './ProductList.css'


const ProductList = () => {

    return (
        <div className='products'>
            {products.map(product => {

                return (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name}></img>
                        <p>{product.name}</p>
                        <NavLink to={'/product-detail/'+ product.id }>Ver producto</NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;