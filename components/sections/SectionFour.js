import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'

export const SectionFour = () => {
  return (
    <>
      <div
        id="multiple-grid-dark-section"
        style={{ color: "#fefefe", backgroundColor: "#0a0a0a" }}
      >
        <div className={styles.col6}>
          <div className={styles.el}>
            <div className={styles.cover}>
              <Image width={672} height={378} src="/images/people.jpg" alt="people" className={styles.img}></Image>
            </div>
          </div>
          <div className={styles.el}>
            <p>
              Digital products are a unique opportunity that today is revolutionizing
              online business and the world of digital marketing. And you only need 3
              things to get started: a computer, internet connection and the knowledge
              that we are going to reveal to you in this program Digital products are
              a unique opportunity that today is revolutionizing online business and
              the world of digital marketing. And you only need 3 things to get
              started: a computer, internet connection and the knowledge that we are
              going to reveal to you in this program
            </p>
          </div>
        </div>
        <hr style={{ margin: 30, border: "1px dashed rgb(0, 204, 255)" }} />
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
            <p style={{ margin: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              corrupti asperiores, libero quas deleniti veritatis:
            </p>
            <Link href="/payment">
              <button type="button" className={styles.sellBtn}>
                <ion-icon name="bag-handle-outline" />
                <span>buy the course</span>
                <small>
                  lorem ipsum, dolor sit amet consectetur adipisicing elit
                </small>
              </button>
            </Link>
          </div>
        </div>
        <hr style={{ margin: 10, border: "1px solid rgb(0, 204, 255)" }} />
        <div className={styles.col6}>
          <div className={styles.el}>
            <div className={styles.cover}>
              <Image width={672} height={378} src="/images/people.jpg" alt="people" className={styles.img}></Image>
            </div>
          </div>
          <div className={styles.el}>
            <p>
              Digital products are a unique opportunity that today is revolutionizing
              online business and the world of digital marketing. And you only need 3
              things to get started: a computer, internet connection and the knowledge
              that we are going to reveal to you in this program Digital products are
              a unique opportunity that today is revolutionizing online business and
              the world of digital marketing. And you only need 3 things to get
              started: a computer, internet connection and the knowledge that we are
              going to reveal to you in this program
            </p>
          </div>
        </div>
        <div className={styles.centeredGrid}>
          <div className={styles.underlineCol}>
            <div className={styles.col6}>
              <div className={styles.el}>
                <ion-icon
                  name="accessibility"
                  style={{ color: "rgb(0, 204, 255)", fontSize: 64 }}
                />
                <p>
                  Digital products are a unique opportunity that today is
                  revolutionizing online business and the world of digital marketing.
                  And you only need 3 things to get started: a computer, internet
                  connection and the knowledge that we are going to reveal to you in
                  this program
                </p>
              </div>
              <div className={styles.el}>
                <ion-icon
                  name="person"
                  style={{ color: "rgb(0, 204, 255)", fontSize: 64 }}
                />
                <p>
                  Digital products are a unique opportunity that today is
                  revolutionizing online business and the world of digital marketing.
                  And you only need 3 things to get started: a computer, internet
                  connection and the knowledge that we are going to reveal to you in
                  this program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}