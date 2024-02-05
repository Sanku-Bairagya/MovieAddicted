import React,{useState} from 'react'

import './style.scss'




const Switchtabs = ({data , onTabChange}) => {
  const [selectedTab,setSelectedTab] = useState(0); // it will take index
  const [left,setleft] = useState(0);
  
  
  const activeTab = (tab,index) =>{
    setleft(index * 100);
    
    setTimeout(() => {
        setSelectedTab(index);
        
    },100);
    onTabChange(tab,index);
  }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab,index) => (
          <span 
            key={index} 
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab,index)}
          >{tab}</span>
        ))}
        <span className="movingBg" style={{left}} />
      </div>

        
    </div>
  )
}

export default Switchtabs