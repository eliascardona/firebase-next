import React from 'react'
import Link from 'next/link'
import styles from '../styles/thanks.module.css'
import { PageHeader } from '../components/sections/PageHeader'

function thnaks() {
  return (
    <>
      <PageHeader />
      <div className={styles.centeredGrid}>
        <h1>Congrats - Order completed!</h1>
        <p className={styles.highlighted}>lorem ipsum thanks for your order</p>
        <div className={styles.grayRow}>
          <p>order receipt:</p>
        </div>

        <div className={styles.spaceBtw}>
          <div>product</div>
          <div>price</div>
        </div>
        <hr style={{width:'80%', border:'solid 1px #000'}}/>
        <div className={styles.spaceBtw}>
          <div>master course</div>
          <div>$80 usd</div>
        </div>
        <div className={styles.spaceBtw}>
          <div>tax one</div>
          <div>$13.5 usd</div>
        </div>
        <div className={styles.spaceBtw}>
          <div>transaction fee</div>
          <div>$3.5 usd</div>
        </div>

        <div className={styles.grayRow}>
          <p>access:</p>
        </div>

        <ul>
          <li>
            <p style={{display:'inline'}}>go to the course page</p>
            {" "}
            <Link href="/videos">
              <a style={{display:'inline', cursor: 'pointer', textDecoration:'none'}}>
                here
              </a>
            </Link>
          </li>
        </ul>

      </div>
    </>
  )
}

export default thnaks