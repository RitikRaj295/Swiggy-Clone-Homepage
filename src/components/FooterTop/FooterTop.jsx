import React from "react";
import style from './FooterTop.module.css'
import FooterBtn from "../FooterBtn/FooterBtn";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { FaApple } from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>For better experience, download the Swiggy app now</p>
      </div>
      <div className={style.FooterButtons}>
        <FooterBtn
          logo={<IoLogoGooglePlaystore />}
          text1="GET IT ON"
          text2="Google Play"
        />
        <FooterBtn
          logo={<FaApple />}
          text1="Download on the"
          text2="App Store"
        />
      </div>
    </div>
  );
};

export default FooterTop;
