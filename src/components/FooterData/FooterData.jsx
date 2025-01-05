import React from 'react'
import style from './FooterData.module.css'

const FooterData = (props) => {
  return (
    <div className={style.container}>
        <div className={style.title}>
            {props.title}
        </div>
        <div className={style.list}>
            <li>{props.L1}</li>
            <li>{props.L2}</li>
            <li>{props.L3}</li>
            <li>{props.L4}</li>

        </div>
    </div>
  )
}

export default FooterData
