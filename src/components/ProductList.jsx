import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlices'
import Product from './Product'
import '../css/ProductList.css'


function ProductList() {

    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.product)

    useEffect(() => {

        dispatch(getAllProducts())

    }, [])
    return (
        <div className='flex-row ProductList-container'>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList