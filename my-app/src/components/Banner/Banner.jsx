import React, { useEffect, useState } from 'react'
import './Banner.css'
 import axios from 'axios';
 //import { API_KEY } from '../constant/constant';
 import { Banners,Imageurl } from '../constant/url';




 function Banner() {
 
 
  const [trending, settrending] = useState()
  useEffect(() => {
    axios.get(Banners).then((response)=>{
      let value=Math.round(Math.random() * 20);
      console.log(value)

      console.log(response.data.results[value]);
     
      settrending(response.data.results[value]);
    }).catch((err)=>{
      console.log(err)
    })
  },[])

 
  return (
    
    <div className='banner' style={{backgroundImage:`url(${trending ? Imageurl+trending.backdrop_path:''})`}}>
      <div className='content'>
      <h2 className='title'>{trending ? trending.original_title:''}</h2>
      <div className='bannerbutton'>
        <button className='button'>Play</button>
        <button className='button'>my list</button>
      </div>
      <h1 className='discrption'>{trending ? trending.overview:''}</h1>
      </div>
   <div className="fadebottom"></div>
    </div>
  )
}

export default Banner