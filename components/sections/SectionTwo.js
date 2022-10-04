import React from 'react'
import styles from '../../styles/Landing.module.css'

export const SectionTwo = () => {
  return (
    <>
      <div className={styles.iconsBox}>
        <div className={styles.el}></div>
        <div className={styles.el} style={{ marginBottom: '5px' }}>
          <h2 style={{ color: "rgb(0, 204, 255)" }}>Amazing features</h2>
        </div>
        <div className={styles.el} style={{ margin: "30px 0 0 0" }}>
          <ion-icon
            name="cash-outline"
            style={{ color: "rgb(0, 204, 255)", fontSize: 62 }}
          />
          <hr style={{ width: "100%", color: "#fefefe" }} />
        </div>
        <div className={styles.el}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            dolore modi vitae sit ullam cum deleniti commodi.
          </p>
        </div>
        <div className={styles.el} style={{ margin: "30px 0 0 0" }}>
          <ion-icon
            name="code-slash"
            style={{ color: "rgb(0, 204, 255)", fontSize: 62 }}
          />
          <hr style={{ width: "100%", color: "#fefefe" }} />
        </div>
        <div className={styles.el}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            dolore modi vitae sit ullam cum deleniti commodi.
          </p>
        </div>
        <div className={styles.el} style={{ margin: "30px 0 0 0" }}>
          <ion-icon
            name="analytics-outline"
            style={{ color: "rgb(0, 204, 255)", fontSize: 62 }}
          />
          <hr style={{ width: "100%", color: "#fefefe" }} />
        </div>
        <div className={styles.el}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            dolore modi vitae sit ullam cum deleniti commodi.
          </p>
        </div>
        <div className={styles.el} style={{ margin: "30px 0 0 0" }}>
          <ion-icon
            name="bag-handle-outline"
            style={{ color: "rgb(0, 204, 255)", fontSize: 62 }}
          />
          <hr style={{ width: "100%", color: "#fefefe" }} />
        </div>
        <div className={styles.el}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            dolore modi vitae sit ullam cum deleniti commodi.
          </p>
        </div>
      </div>
    </>
  )
}