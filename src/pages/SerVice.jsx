import React, { useState } from 'react'
import cute from '../assets/cute.jpg'
import Card from '../components/Card';

const SerVice = () => {

  const[product,setProduct]=useState([])

  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log);

  

  return (
    <>
    <div>
      <img src={cute} alt="" className='w-full bg-center' />
    </div>
    <div className='flex justify-between flex-wrap container m-auto'>
      <Card />
    </div>
    </>
  )
}

export default SerVice
