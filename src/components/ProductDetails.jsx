import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setselectedProduct } from '../redux/slices/productSlices'
import '../css/ProductsDetails.css'
import { CiSquarePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlices'


function ProductDetails() {
    const { id } = useParams()
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { image, price, title, description } = selectedProduct
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev + 1) //setCount(count+1) de diyebilirdik aynıdır
    }
    const decrement = () => {
        setCount((prev) => prev - 1) //setCount(count-1) de diyebilirdik aynıdır
    }

    const dispatch = useDispatch()
    useEffect(() => {
        console.log(products)
        getProductById()
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setselectedProduct(product))
            }

        })
    }

    const addBasket = () => {
        const payload = {
            id,
            image,
            price,
            title,
            description,
            count
        }
        dispatch(addToBasket(payload))
        dispatch(calculateBasket())
    }


    return (
        <div className='flex-row Product-Details-Container'>
            <div>
                <img src={image} className='Product-Details-img' />
            </div>
            <div>
                <h2>{title}</h2>
                <p className='Product-Details-desc'>{description}</p>
                <h1 className='Product-Details-price'>{price}₺</h1>
                <div className='Product-Details-icons flex-row'>
                    <CiSquarePlus onClick={increment} />{count}<CiCircleMinus onClick={decrement} />
                </div>
                <div className='Product-Details-btn-container flex-row'>
                    <button onClick={addBasket} className='Product-Details-button'>Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails