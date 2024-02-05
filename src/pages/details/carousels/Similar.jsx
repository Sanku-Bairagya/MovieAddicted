import React from "react";
import Carousel from "../../../Components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import VideoSection from "../videoeSection/VideoSection";

const Similar = ({mediaType , id}) => {
    
    const {data,loading,error} = useFetch(`/${mediaType}/${id}/similar`)

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";



    return (
        <Carousel
         title={title}
         data={data?.results}
         loading={loading}
         endpoint = {mediaType}          
        />
    )
}
export default Similar