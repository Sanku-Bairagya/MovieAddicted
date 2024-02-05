import React from 'react'
import {useState,useEffect} from "react"
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/movix-logo.svg"
import { useNavigate,useLocation } from 'react-router-dom';
import "./style.scss"
import ContentWrapper from '../contentwrapper/ContentWrapper';
const Header = () => {
  const [show,setShow] = useState("top");
  const [lastScrolly,setLastScrolly] = useState(0);
  const [mobileMenu,setMobileMenu] = useState(false);
  const [query,setQuery] = useState("");
  const [showSearch,setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  // this useffect is for whenever we switch to another page the page will start from begining of the screen, the previous page might be any location in the ecreen
  useEffect(() => {
     window.scrollTo(0,0);
  },[location])

  const controlNavbar = () => {
    
    if(window.scrollY > 200){
       if(window.scrollY > lastScrolly && !mobileMenu){
          setShow("hide");

       }else{
         setShow("show")
      }
   }else{
      setShow("top");
   }
   setLastScrolly(window.scrollY);
  }
  useEffect(()=>{
      window.addEventListener("scroll",controlNavbar);
      return () =>{
         window.removeEventListener("scroll",controlNavbar);
      };
   },[lastScrolly])
  //when the search abr is open
  const openSearch = () =>{
       setMobileMenu(false);
       setShowSearch(true);  
  }
  //when the mobile menu is open
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  }
   
  const searchQueryHandler = (event) =>{
    if(query.length > 0 && event.key === "Enter"){
      navigate(`/search/${query}`);
      setTimeout(()=>{
        setShowSearch(false)
      },1000)
    }
  }

  const navigationHander = (type) => {
     if(type === "movie"){
        navigate(`/explore/movie`)
     }else{
        navigate(`/explore/tv`)
     }
     setMobileMenu(false);
}
  return (
    <>
       <div className={`header ${mobileMenu ? "mobileView": ""} ${show}`}>
            <ContentWrapper>
              <div className="logo">
                  <img src={logo} alt="" onClick={()=>navigate("/")}/>
               
              </div>
              <ul className="menuItems">
                  <li className="menuItem" onClick={()=>navigationHander("movie")}>Movies</li>
                  <li className="menuItem" onClick={() => navigationHander("TV")}>TV Shows</li>
                  <li className="menuItem" onClick={openSearch}><HiOutlineSearch/></li>
              </ul>
              

              <div className="mobileMenuItems">
                 <HiOutlineSearch onClick={openSearch}/>
                 {mobileMenu ? (
                    <VscChromeClose onClick={() =>{
                      setMobileMenu(false);
                    }}/>
                    
                 ):(
                    <SlMenu onClick={openMobileMenu}/>
                 )}
              </div>
          

          {showSearch && <div className="searchBar">
              <ContentWrapper>
              <div className="searchInput">
                    <input 
                       type="text"
                       placeholder='Movies ,  shows and more ...'
                       onChange={(event)=>setQuery(event.target.value)} 
                       onKeyUp={searchQueryHandler}  
                    />
                    <VscChromeClose onClick={()=>
                        setShowSearch(false)
                    }/>                   
               </div>
              </ContentWrapper>
          </div>}

         </ContentWrapper>
       </div>
    </>
  )
}

export default Header