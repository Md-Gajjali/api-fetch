import React, { useEffect, useState } from 'react'
import img from '../assets/img.jpg'
import ProductCard from '../components/ProductCard';

const About = () => {
  const[count,setCount]= useState(0);
  const[product,setProduct]= useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=> setProduct(data.products));
  },[])
  
  
  

  return (
    <div className=''>
      <img src={img} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptas{count}.</p>
      <button onClick={()=> setCount(count + 1)}>Click</button>
      <div className='container m-auto flex  mt-30 flex-wrap justify-between gap-10'>

      {
        product.map((items)=>{
          return(
            <ProductCard 
              title={items.title}
              img={items.thumbnail}
              price={items.price}
              describtion={items.describtion}
              rating={items.rating}
            />
          )
        })
      }
      </div>
    </div>
  )
}

export default About
