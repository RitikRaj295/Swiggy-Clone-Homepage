import React from 'react'
import style from './Footer.module.css'
import FooterData from '../FooterData/FooterData'
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="/images/swiggy.png" alt="" />
      </div>

    <div className={style.text}>
        <FooterData title='Company' L1='About' L2='Careers' L3='Team' L4='Swiggy One'/>
        <FooterData title='Contact us' L1='Help & Support' L2='Partner with us' L3='Ride with us' L4='Legal'/>
        <FooterData title='We deliver to' L1='Banglore' L2='Gurgaon' L3='Hyderabad' L4='Delhi'/>

    </div>
    </div>
  )
}

export default Footer
