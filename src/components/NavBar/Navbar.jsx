import React from "react";
import style from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";

const links = [
  {
    icon: <CiSearch />,
    name: "Search",
  },
  {
    icon: <BiSolidOffer />,
    name: "Offers",
    sup:"New"
  },
  {
    icon: <IoIosHelpCircleOutline />,
    name: "Help",
  },
  {
    icon: <PiSignIn />,
    name: "SignIn",
  },
  {
    icon: <CiShoppingCart  fontSize="12px"/>,
    sup:"(0)"
  },
];



const Navbar = () => {
  return <nav className={style.navLinks}>
    { 
    
        links.map((link,index)=>{
         
            return (
                <li key={index} className={style.navLink}>
                {link.icon}
                {link.name}
                <sup>{link.sup}</sup>
               </li>)
           
            
        })
    }
  </nav>;
};

export default Navbar;
