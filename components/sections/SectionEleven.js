import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'

export const SectionEleven = () => {
  return (
    <>
    <div className={styles.ctaSection}>
      <div className={styles.centeredGrid}>
        <div className={styles.textCenter}>
          <h1>Let's do it!</h1>
          <Link href="/payment">
            <button type="button" className={styles.sellBtn}>
              <ion-icon name="bag-handle-outline" />
              <span>Get into!</span>
              <small>lorem ipsum dolor sit amet consectetur</small>
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}