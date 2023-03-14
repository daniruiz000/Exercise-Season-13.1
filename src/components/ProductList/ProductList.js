import { Link } from 'react-router-dom';
import { products } from '../../products'
import './ProductList.css'


const ProductList = () => {

    return (
        <div >
            <h1>PRODUCTOS</h1>
            <div className='products'>
                {products.map(product => {

                    return (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name}></img>
                            <p>{product.name}</p>
                            <Link to={'/product-detail/' + product.id}>Ver producto</Link>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductList;