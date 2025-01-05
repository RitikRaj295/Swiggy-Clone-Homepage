import React from 'react'
import style from './Slider.module.css'
import { MdNavigateNext,MdNavigateBefore } from "react-icons/md";


const Slider = ({text,nextSlide,prevSlide,appearance}) => {
  return (
    <div className={style.container}>
        <div className={style.text}>
           <h4> {text}</h4>
        </div>
        <div className={style.Buttons} style={{visibility: appearance }}  >
            <button   onClick={prevSlide}><MdNavigateBefore/></button>
            <button  onClick={nextSlide}><MdNavigateNext/></button>
            
        </div>
      
    </div>
  )
}

export default Slider
