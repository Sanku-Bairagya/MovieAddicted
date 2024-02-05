import React,{useState} from 'react'
import ContentWrapper from '../../../Components/contentwrapper/ContentWrapper'
import Switchtabs from '../../../Components/switchtabs/Switchtabs'
import useFetch from '../../../hooks/useFetch'
import '../../home/style.scss'
import Carousel from '../../../Components/carousel/Carousel'

const Trending = () => {
  const [endpoint,setEndPoint] = useState("day");
  const {data,loading} = useFetch(`/trending/all/${endpoint}`)


  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  }


  return <div className="carouselsection">
    <ContentWrapper>
       <span className="carouselTitle">Trending</span>
       <Switchtabs data={["Day","Week"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data ={data?.results} loading={loading}/>
  </div>
}
export default Trending