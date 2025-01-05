import React, { useEffect, useState } from "react";
import style from "./Cards.module.css";
import { MdOutlineStarRate } from "react-icons/md";

const Cards = ({data, setData,slide2}) => {

  const fetchResturant = async () => {
    try {
      const response = await fetch(
        "http://localhost:5173/public/data/restaurantChains.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const Fetchdata = await response.json();
      setData(Fetchdata);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    fetchResturant();
  }, []);

  return (
    <div className={style.container}>
      {data && data.length > 0 ? (
        data.map((value, index) => (
          <div
            className={style.cardBoxes}
            key={index}
            style={{
              transform: `translateX(${-slide2}00%)`,
              transitionDuration: "1s",
            }}
          >
            <div className={style.cardBox}>
              <img src={`/images/${value.image}`} alt="" />
              <div className={style.overlay}>{value.offer}</div>
            </div>
            <div className={style.cardDetails}>
              <div className={style.title}>{value.title}</div>
              <div className={style.ratingTiming}>
                <div className={style.rate}>
                  <MdOutlineStarRate style={{ color: "green" }} />
                  {value.rating}
                </div>
                <div
                  className={style.timing}
                >{`${value.minTime}-${value.maxTime} mins`}</div>
              </div>
              <div className={style.location}>
                <div className="name">{value.name}</div>
                <div className="place">{value.place}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}  
export default Cards;
