import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ProductAPI from '../api/productAPI'
const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
             try {
                 const { data } = await ProductAPI.get(id);
                 setProduct(data)
             } catch (error) {
                 console.log(error)
             }
        }
        getProduct();
    })
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductDetailPage
