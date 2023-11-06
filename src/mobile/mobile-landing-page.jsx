import React from 'react'
import styles from "./mobile-landing-page.module.css"

export default function LandingPage() {
  return (
    <div className={styles.wrapper} >
  <div className={styles.header}>  <a href="https://sencogoldanddiamonds.com/" target="blank"><img src='\web-icon.png' className={styles.webIcon}/></a></div>
   <div className={styles.container}>
   <img src="\logo with website.png" alt="" className={styles.logo} />
    <img src="\coin@2x.png" alt="" className={styles.coin}/>
    <img src="\Senco 05.11.00_01_57_23.Still001@2x.png" alt="" className={styles.content} />
    <span className={styles.subText}>
            Get a personalized Ma Laskhmi Mantra Pooja <br /> with Your Name and
            a chance to win a Senco Gold Coin{" "}
          </span>
          <button className={styles.applyBtn}>APPLY NOW</button>
          <span className={styles.footer}> *Terms and condition apply</span>
          <div className={styles.imgSection}>
          <img src="/suv@2x.png" className={styles.ceoPic}/>
          <img src="/Joi@2x.png" className={styles.directorPic} />
          <img src="/laxmi.png" className={styles.priestPic} />

          </div>
         
    </div>
   </div>
  )
}
