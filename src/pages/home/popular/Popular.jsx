import React,{useState} from 'react'
import Switchtabs from '../../../Components/switchtabs/Switchtabs'
import useFetch from '../../../hooks/useFetch'
import '../../home/style.scss'
import Carousel from '../../../Components/carousel/Carousel'
import ContentWrapper from '../../../Components/contentwrapper/ContentWrapper'

const Popular = () => {
  const [endpoint,setEndPoint] = useState("movie");
  const {data,loading} = useFetch(`/${endpoint}/popular`)


  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }


  return <div className="carouselsection">
    <ContentWrapper>
       <span className="carouselTitle">Popular items</span>
       <Switchtabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel 
     data ={data?.results} 
     loading={loading}
     endpoint={endpoint}
    />
  </div>
}
export default Popular