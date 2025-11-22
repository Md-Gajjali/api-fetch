import { useEffect, useState } from 'react'
import './App.css'
import dan from './assets/dangerus.jpg'
import Card from './components/Card'
import { DiScriptcs } from 'react-icons/di'


function App() {


  // const[product,setProduct] = useState([])

  // useEffect(()=>{
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then((data)=> setProduct(data.products));
  // },[])

  // console.log(product);
  

  const[product,setProduct]=useState([])

  
  useEffect(()=>{ 
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=> setProduct(data.products));
    },[])

  // const[count,setCount]=useState(100)

  // const[counter,setCounter]=useState(0)

  
  // const handleClick= ()=>{
  //   setCounter(counter + 1)
  // }

  

  return (
    <>

    {/* <div>
        <img src={dan} alt=""  className='w-full h-[790px] '/>
    </div>
    <div className="w-full h-50  bg-pink-400 text-center  py-8">
    </div> */}
        {/* <Heading count={count} counter={counter} />
        <button onClick={()=> setCount(count + 1)} className='px-5 py-3 bg-amber-400 mt-4 border-2 hover:bg-red-500 mr-1 hover:text-3xl'>click</button> 
        <button className='px-5 py-3 bg-amber-400 mt-4 border-2' onClick={handleClick} >Count</button> */}

        <div className='contaier container m-auto mt-20'>
            <div className='flex text-center flex-wrap justify-between'>
              {/* {
                product.map((items)=>{
                  return(
                    <Card 
                      imgSrc={items.thumbnail}
                      title={items.title}
                      price={items.price}
                      rating={items.rating}
                      describtion={items.description}
                    />

                  )
                })
              } */}

              {
                product.map((items)=>{
                  return(
                    <Card 
                    price={items.price}
                    imgSrc={items.thumbnail}
                    rating={items.rating}
                    describtion={items.describtion}
                    title={items.title}
                    />
                )
              })
              }

            </div>
        </div>
    </>
  )
}

export default App
