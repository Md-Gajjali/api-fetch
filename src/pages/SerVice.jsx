import React, { useEffect, useState } from 'react'
import cute from '../assets/cute.jpg'
import Card from '../components/Card';

const SerVice = () => {

  const[product,setProduct]=useState([])



  console.log(product);
  
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=> setProduct(data.products));
  },[])

  return (
    <>
    <div>
      <img src={cute} alt="" className='w-full bg-center' />
    </div>
    <div className='flex justify-between flex-wrap container m-auto'>
      {
        product.map((items)=>{
          return (
            <Card
              title={items.title}
              price={items.price}
              imgSrc={items.thumbnail}
              describtion={items.description}
              discountPercentage={items.discountPercentage}
              rating={items.rating}
            />
          )
        })
      }
    </div>
    </>
  )
}

export default SerVice
