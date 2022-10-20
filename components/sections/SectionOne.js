import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'

export const SectionOne = () => {
  return (
    <>
      <div className={styles.introSection}>
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
            <h1 style={{ color: "rgb(0, 204, 255)" }}>Your super title</h1>
            <h2>Super stunning subtitle for sell your infoproduct</h2>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/5vNYuffFuqA"
                frameBorder={0}
              />
            </div>
            <Link href="/payment">
              <button type="button" className={styles.sellBtn}>
                <ion-icon name="bag-handle-outline" />
                <span>buy the course</span>
                <small>lorem ipsum dolor sit amet consectetur adipisicing elit</small>
              </button>
            </Link>
          </div>
        </div>
        <hr style={{ margin: 20, border: "1px solid rgb(0, 204, 255)" }} />
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
            <h1 style={{ color: "rgb(0, 204, 255)" }}>Your super title</h1>
            <h2>Super stunning subtitle for sell your infoproduct</h2>
            <div className={styles.cover}>
              <Image width={913} height={541} src="/images/result.jpg" alt="result" className={styles.img}></Image>
            </div>
            <Link href="/payment">
              <button type="button" className={styles.sellBtn}>
                <ion-icon name="bag-handle-outline" />
                <span>buy the course</span>
                <small>lorem ipsum, dolor sit amet consectetur adipisicing elit</small>
              </button>
            </Link>  
          </div>
        </div>
      </div>
    </>
  )
}