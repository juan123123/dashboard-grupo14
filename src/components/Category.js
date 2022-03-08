import React from 'react'

const Category = (props) => {

  const { category, quantity } = props.category

  return (
    <div className='category'>
      <h2>{category}</h2>
      <p>Quantity: {quantity}</p>
    </div>
  )
}

export default Category