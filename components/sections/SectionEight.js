import React from "react";
import Image from "next/image";
import styles from "../../styles/Landing.module.css";

export const SectionEight = () => {
  return (
    <>
      <div id="instructor2" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
            <h1 className={styles.megaTitleBlack}>SOME SUCCESS CASES</h1>
          </div>
          <div className={styles.col6}>
            <div className={styles.el}>
              <div className={styles.circle}>
                <Image width={70} height={70} src="/images/circular.png" alt="instructor" className={styles.circle}></Image>
              </div>
              <p>
                Digital products are a unique opportunity that today is
                revolutionizing online business and the world of digital
                marketing. And you only need 3 things to get started: a
                computer, internet connection and the knowledge that we are
                going to reveal to you in this program.
              </p>
              <span
                className={styles.highlighted}
                style={{ display: "block", marginBottom: 12 }}
              >
                <span className={styles.gray}>Marketing expert</span>
              </span>
            </div>
            <div className={styles.el}>
              <div className={styles.circle}>
                <Image width={70} height={70} src="/images/circular.png" alt="instructor" className={styles.circle}></Image>
              </div>
              <p>
                Digital products are a unique opportunity that today is
                revolutionizing online business and the world of digital
                marketing. And you only need 3 things to get started: a
                computer, internet connection and the knowledge that we are
                going to reveal to you in this program.
              </p>
              <span
                className={styles.highlighted}
                style={{ display: "block", marginBottom: 12 }}
              >
                <span className={styles.gray}>Marketing expert</span>
              </span>
            </div>
          </div>
          <div className={styles.col6}>
            <div className={styles.el}>
              <div className={styles.circle}>
                <Image width={70} height={70} src="/images/circular.png" alt="instructor" className={styles.circle}></Image>
              </div>
              <p>
                Digital products are a unique opportunity that today is
                revolutionizing online business and the world of digital
                marketing. And you only need 3 things to get started: a
                computer, internet connection and the knowledge that we are
                going to reveal to you in this program.
              </p>
              <span
                className={styles.highlighted}
                style={{ display: "block", marginBottom: 12 }}
              >
                <span className={styles.gray}>Marketing expert</span>
              </span>
            </div>
            <div className={styles.el}>
              <div className={styles.circle}>
                <Image width={70} height={70} src="/images/circular.png" alt="instructor" className={styles.circle}></Image>
              </div>
              <p>
                Digital products are a unique opportunity that today is
                revolutionizing online business and the world of digital
                marketing. And you only need 3 things to get started: a
                computer, internet connection and the knowledge that we are
                going to reveal to you in this program.
              </p>
              <span
                className={styles.highlighted}
                style={{ display: "block", marginBottom: 12 }}
              >
                <span className={styles.gray}>Marketing expert</span>
              </span>
            </div>
          </div>
          <div className={styles.centeredGrid}>
            <div className={styles.circle}>
              <Image width={70} height={70} src="/images/circular.png" alt="instructor" className={styles.circle}></Image>
            </div>
            <p>
              Digital products are a unique opportunity that today is
              revolutionizing online business and the world of digital
              marketing. And you only need 3 things to get started: a computer,
              internet connection and the knowledge that we are going to reveal
              to you in this program.
            </p>
            <span
              className={styles.highlighted}
              style={{ display: "block", marginBottom: 12 }}
            >
              <span className={styles.gray}>Marketing expert</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};