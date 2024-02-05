import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.scss"
import useFetch from '../../../hooks/useFetch'
import {  useSelector } from 'react-redux'
import Img from '../../../Components/lazyLoadImage/Img'
import ContentWrapper from "../../../Components/contentwrapper/ContentWrapper";



const heroBanner = () => {
  const [background,setBackground] = useState("")
  const [query,setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home);
  const {data, loading} = useFetch("/movie/upcoming"); // this custom hook is used for the main image in the banner section at home page

  useEffect(()=>{
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    setBackground(bg)

  },[data])
  

  const searchQueryHandler = (event)=>{
    if(event.key === "Enter" && query.length > 0){
        navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">

        {!loading && <div className="backdrop-img">
              <Img src={background}/>
        </div>}

        <div className="opacity-layer"></div>

        {/* <ContentWrapper> */}
            <div className="heroBannerContent">
                 <span className="title">Welcome .</span>
                 <span className="subTitle">Cinematic  Streams: Your Gateway to Unlimited Movie Magic</span>
                 <div className="searchInput">
                    <input 
                       type="text"
                       placeholder='Movies ,  shows and more ...'
                       onChange={(event)=>setQuery(event.target.value)} 
                       onKeyUp={searchQueryHandler}  
                    />
                    <button>Search</button>
                 </div>
            </div>   
        {/* </ContentWrapper> */}
        
    </div>
  )
}

export default heroBanner