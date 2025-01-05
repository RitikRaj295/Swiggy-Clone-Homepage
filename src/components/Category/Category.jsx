import React, { useEffect, useState } from 'react'
import style from './Category.module.css'

const Category = ({slide,Category,setCategory}) => {
    

  const fetchingCategory= async ()=>{
      const response = await fetch('http://localhost:5173/public/data/category.json');
      const data = await response.json();
      setCategory(data);
  }

useEffect(()=>{
  fetchingCategory();
},[])

  return (
    <div className={style.container}>
{        Category.map((value,index)=>{
                   return (
                        <div key={index} className={style.boxImage} style={{transform:`translateX(${- slide * 100}%)`, transitionDuration:'.7s'}}>
                               <img src={`/images/${value.image}`} alt="image"  />
                               
                      </div>
                   )
                  
})
}   
</div>
  )
}

export default Category
