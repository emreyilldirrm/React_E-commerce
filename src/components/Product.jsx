import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {
    const { id, image, price, title, description } = product
    const navigate = useNavigate()

    return (
        <div className='card flex-column'>

            <img className='image' src={image} alt="" />
            <p>{title}</p>
            <h3>{price}₺</h3>

            <div>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayına git</button>
            </div>
        </div>

    )
}

export default Product