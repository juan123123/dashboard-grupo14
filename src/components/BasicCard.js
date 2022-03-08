import React from 'react'

const BasicCard = (props) => {

  const { title, value } = props

  return (
    <div className='basic-card'>
      <h1>{title}</h1>
      <p>{value}</p>
    </div>
  )
}

export default BasicCard