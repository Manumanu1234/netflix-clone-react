import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from 'axios'
import {Imageurl } from '../constant/url'
import YouTube from 'react-youtube';
function Rowpost(props) {
  const [moviearr, setmoviearr] = useState([])
  const [youtube, setyoutube] = useState() 
  useEffect(() => {
     axios.get(props.url).then((responses)=>{
      console.log(responses.data);
      setmoviearr(responses.data.results);
     })
  },[])
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  function handlerfunction(id){
      console.log(id);
     axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1e88b4752ec95155d917907a67c3322d`).then((response)=>{
    //  console.log(response.data.results[0]);
       setyoutube(response.data.results[0]);
     })

  }
  
   
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
     {
      moviearr.map((obj)=>{
              return(
                <img onClick={()=>{handlerfunction(obj.id)}} className={props.isSmall ? 'smallposter' :'poster'} src={`${Imageurl+obj.backdrop_path}`}  alt="rendering wait" />
              )
            }) 
     }
          
            
          
           
        </div>
       {

         youtube ? <YouTube videoId={youtube.key} opts={opts}  /> :''
       } 
    </div>
  )
}

export default Rowpost