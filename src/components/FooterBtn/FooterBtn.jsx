import React from 'react'
import style from './FooterBtn.module.css'


const FooterBtn = (props) => {
  return (
    <button className={style.button}>
        <div className={style.logo}>{props.logo}</div>
        <div className={style.text}>
            <div className={style.text1}>{props.text1}</div>
            <div className={style.text2}>{props.text2}</div>
        </div>
    </button>
  )
}

export default FooterBtn
