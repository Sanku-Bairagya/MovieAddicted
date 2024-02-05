import React, { useState } from 'react'
import "./style.scss"
import ContentWrapper from "../../../Components/contentwrapper/ContentWrapper";
import {PlayButton} from "../PlayButton"
import Videopopup from "../../../Components/videoPopup/Videopopup"
import Img from '../../../Components/lazyLoadImage/Img';


const VideoSection = ({ data,loading }) => {
    
    const [show,setShow] = useState(false);
    const [videoId,setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>

            </div>
        )
    }

    return (
      <div className="videosSection">
        
            <div className="sectionHeading">Official videos</div>

            {!loading ? (<div className="videos">
                {data?.results?.map((video) => (
                    <div 
                    key={video.id} 
                    className="videoItem"
                    onClick={() => {
                        setVideoId(video.key)
                        setShow(true)
                    }}>
                        <div className="videoThumbnail">
                            <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                            <PlayButton />
                        </div>
                        <div className="videoTitle">
                            {video.name}
                        </div>
                    </div>
                ))}
            </div>)

            :(<div className="videoSkeleton">
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
            </div>
            )}
        
        <Videopopup 
         show={show}
         setShow={setShow}
         videoId={videoId}
         setVideoId={setVideoId}

        />
      </div>
    )
}

export default VideoSection