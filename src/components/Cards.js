import React from 'react'

const Cards = ({ src, name}) => {

  return (
    <div className='card'>
    <img src={src} alt={name} />
    <h3>{name}</h3>
    </div>
  )
}

export default Cards