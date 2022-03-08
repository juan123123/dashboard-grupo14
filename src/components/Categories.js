import React, { useEffect, useState } from 'react'
import Category from './Category'
import axios from 'axios'
import { apiUrl } from '../utils/apiUrl'

const Categories = () => {

  const [ categories, setCategories ] = useState([])

  const getCategories = () => {
    axios
      .get(`${apiUrl}/api/products`)
      .then(res => {
        setCategories(res.data.countByCategory)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <div className='categories'>
      <div className='categories-box'>
        {categories.map((category, i) => (
            <Category 
              category={category}
              key={i}
            />
        ))}
      </div>
    </div>
  )
}

export default Categories