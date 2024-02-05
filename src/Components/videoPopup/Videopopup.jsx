import React from 'react'
import ReactPlayer from 'react-player/youtube'

import './style.scss'

const Videopopup = ({show,setShow,videoId,setVideoId}) => {
    
    const hide = () => {
        setShow(false);
        setVideoId(null);
    }
    
    return (
        <div className={`videoPopup ${show? "visible":""}`}>
            <div className="opacityLayer" onClick={hide}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hide}>
                    Close
                </span>
                <ReactPlayer 
                  url={`https://www.youtube.com/watch?v=${videoId}`}
                  controls
                  width="100%"
                  height="100%"
                />
            </div>
        </div>
    )
}

export default Videopopup