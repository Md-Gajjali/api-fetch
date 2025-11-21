import React, { useEffect, useState } from 'react'

const Heading = ({count,counter}) => {

  const[num,setNum] = useState(count)

  const[demo,setDemo] = useState(counter)

  useEffect(()=>{
    setNum(count)
  },[count])


  useEffect(()=>{
    setDemo(counter)
  },[counter])
  return (
      <div className=''>
            <h1 className='text-2xl'>{num}</h1>
            <p className='text-2xl'>this is counter number{demo}</p>
      </div>
      

  )
}

export default Heading
