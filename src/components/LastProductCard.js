import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../utils/apiUrl'

const LastProductCard = () => {

  const [ lastProduct, setLastProduct ] = useState([])

  const getProducts = () => {
    axios
      .get(`${apiUrl}/api/products`)
      .then(res => {
        const maxId = Math.max(...res.data.products.map(u => u.id))
        const product = res.data.products.find(u => u.id === maxId)
        setLastProduct(product)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='product'>
      <img 
        src={lastProduct.image}
        alt='product' 
      />
      <h1>Last Created Product</h1>
      <h2>Product Name: <span>{lastProduct.name}</span></h2>
      <p>Price: <span>$ {lastProduct.price}</span></p>
      <p>Description: <span>{lastProduct.description}</span></p>
    </div>
  )
}

export default LastProductCard