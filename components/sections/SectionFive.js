import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'

export const SectionFive = () => {
  return (
    <>
      <div
        id="multiple-grid-dark-section-2"
        style={{ color: "#fefefe", backgroundColor: "#0a0a0a" }}
      >
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
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
            <div className={styles.centeredGrid}>
              <p>
                Digital products are a unique opportunity that today is
                revolutionizing online business and the world of digital marketing.
                And you only need 3 things to get started: a computer, internet
                connection and the knowledge that we are going to reveal to you in
                this program. Digital products are a unique opportunity that today is
                revolutionizing online business and the world of digital marketing.
                And you only need 3 things to get started: a computer, internet
                connection and the knowledge that we are going to reveal to you in
                this program.
              </p>
            </div>
          </div>
        </div>
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
            <div className={styles.centeredGrid}>
              <div className={styles.a}>
                <p className={styles.semiHl}>
                  Digital products are a unique opportunity that today is
                  revolutionizing online business and the world of digital marketing.
                  Digital products are a unique opportunity that today is
                  revolutionizing online business and the world of digital marketing.
                </p>
                <p className={styles.semiHl}>
                  Digital products are a unique opportunity that today is
                  revolutionizing online business and the world of digital marketing.
                  <span className="blue">Digital products are a unique:</span>
                </p>
              </div>
              <div className={styles.b}>
                <div style={{ display: "block", margin: "15px 0 3px 2px" }}>
                  <ion-icon
                    name="checkmark-circle"
                    style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
                  />
                  <p className={styles.semiHl} style={{ display: "inline" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, dolor!
                  </p>
                </div>
                <div style={{ display: "block", margin: "15px 0 3px 2px" }}>
                  <ion-icon
                    name="checkmark-circle"
                    style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
                  />
                  <p className={styles.semiHl} style={{ display: "inline" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                    laborum dolorum autem dolor temporibus quisquam!
                  </p>
                </div>
                <div style={{ display: "block", margin: "15px 0 3px 2px" }}>
                  <ion-icon
                    name="checkmark-circle"
                    style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
                  />
                  <p className={styles.semiHl} style={{ display: "inline" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div style={{ display: "block", margin: "15px 0 3px 2px" }}>
                  <ion-icon
                    name="checkmark-circle"
                    style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
                  />
                  <p className={styles.semiHl} style={{ display: "inline" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    ducimus obcaecati beatae ea?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}