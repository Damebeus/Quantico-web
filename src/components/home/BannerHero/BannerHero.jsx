import React from 'react'
import Banner from "../../../assets/bannerqua.jpeg"
import style from "./BannerHero.module.css"

const BannerHero = () => {
  return (
    <div className={style.container}>
        <img src={Banner} className={style.banner} alt='Banner Quantico'></img>
    </div>
  )
}

export default BannerHero