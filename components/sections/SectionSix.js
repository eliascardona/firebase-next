import React from "react";
import Image from "next/image";
import styles from "../../styles/Landing.module.css";

export const SectionSix = () => {
  return (
    <>
      <div id="instructor" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
            <h1 className={styles.megaTitleBlue}>Your instructor</h1>
            <h1>John Doe</h1>
          </div>
          <div className={styles.col6}>
            <div className={styles.el}>
              <div className={styles.cover}>
                <Image width={454} height={680} src="/images/instructor.jpg" alt="instructor" className={styles.img}></Image>
              </div>
            </div>
            <div className={styles.el}>
              <p>
                <span
                  className={styles.highlighted}
                  style={{ display: "block", marginBottom: 12 }}
                >
                  <span className={styles.gray}>Marketing expert</span>
                </span>
                Digital products are a unique opportunity that today is
                revolutionizing online business and the world of digital
                marketing. And you only need 3 things to get started: a
                computer, internet connection and the knowledge that we are
                going to reveal to you in this program Digital products are a
                unique opportunity that today is revolutionizing online business
                and the world of digital marketing. And you only need 3 things
                to get started: a computer, internet connection and the
                knowledge that we are going to reveal to you in this program
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
