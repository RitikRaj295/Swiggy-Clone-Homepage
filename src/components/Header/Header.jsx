import React, { useState } from 'react'
import style from './Header.module.css'
import { RxCaretDown } from "react-icons/rx";
import Navbar from '../NavBar/Navbar';
import { PiX } from 'react-icons/pi';
import SideMenu from '../SideMenu/SideMenu';


const Header = () => {
  const [toggle,setToggle]=useState(false);
   function showSideMenu(){
    setToggle(true)
}
  
  return (
    <>
    <div className={style.overlay} onClick={()=> setToggle(false)} style={{
      opacity: toggle ? 1:0, 
      visibility: toggle? "visible": "hidden" ,
      zIndex:100000
    }}>
      <div className={style.sideMenu} style={{"left":toggle? "0%":"-100%"}} onClick={(e)=>{e.stopPropagation();}}><SideMenu/></div>
    </div>
   <header className={style.header}>
    <div className={style.container}>
      <div className={style.logo}>
        <img src="images/Swiggy-logo.png" alt="swiggy-logo" />
      </div>
      <div className={style.location}>
        <div><span>Mayur Vihar</span> Delhi, India </div> <div><RxCaretDown  className={style.icon} onClick={showSideMenu}/></div>

      </div>
      <div className={style.navTag}> <Navbar/></div>   
    </div>
   </header>
   </>
  )
}

export default Header
