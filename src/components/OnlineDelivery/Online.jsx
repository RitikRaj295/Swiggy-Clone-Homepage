import React from 'react'
import style from './Online.module.css'
import { MdOutlineStarRate } from "react-icons/md";


const Online = ({data}) => {
  return (
    <div>
       <div className={style.container}>
            {data && data.length > 0 ? (
              data.map((value, index) => (
                <div
                  className={style.cardBoxes}
                  key={index}
                 
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
    </div>

  )
}

export default Online;
