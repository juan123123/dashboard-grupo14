import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../utils/apiUrl'

const Products = () => {

  const [ products, setProducts ] = useState([])

  const fields = ['Id','Name','Price','Category', 'Description']

  const getProducts = () => {
    axios
      .get(`${apiUrl}/api/products`)
      .then(res => {
        console.log(res)
        setProducts(res.data.products)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='box-products'>
      <table>
        <tr>
          {fields.map((f, i) => <th>{f}</th>)}
        </tr>
        {products.map((p,i) => (
          <tr>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>$ {p.price}</td>
            <td>{p.category}</td>
            <td>{p.description}</td>
          </tr>
        ))} 
      </table>
    </div>
  )
}

export default Products