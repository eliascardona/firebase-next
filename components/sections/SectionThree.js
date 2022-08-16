import React from 'react'
import styles from '../../styles/Landing.module.css'

export const SectionThree = () => {
  return (
    <>
      <div id="just-text-1" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
            <p className={styles.highlighted} style={{ color: "rgb(0, 204, 255)" }}>
              If you have ever found that…
            </p>
          </div>
          <div style={{ display: "block", margin: "0 0 5px 13px" }}>
            <ion-icon
              name="checkmark-circle"
              style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
            />
            <p style={{ display: "inline" }}>
              Lorem, ipsum dolor sit amet consectetur repudiandae architecto expedita
              magnam vero
            </p>
          </div>
          <div style={{ display: "block", margin: "0 0 5px 13px" }}>
            <ion-icon
              name="checkmark-circle"
              style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
            />
            <p style={{ display: "inline" }}>
              Lorem, ipsum dolor sit amet consectetur repudiandae architecto expedita
              magnam vero
            </p>
          </div>
          <div style={{ display: "block", margin: "0 0 5px 13px" }}>
            <ion-icon
              name="checkmark-circle"
              style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
            />
            <p style={{ display: "inline" }}>
              Lorem, ipsum dolor sit amet consectetur repudiandae architecto expedita
              magnam vero
            </p>
          </div>
          <div style={{ display: "block", margin: "0 0 5px 13px" }}>
            <ion-icon
              name="checkmark-circle"
              style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
            />
            <p style={{ display: "inline" }}>
              Lorem, ipsum dolor sit amet consectetur repudiandae architecto expedita
              magnam vero
            </p>
          </div>
          <div style={{ display: "block", margin: "0 0 5px 13px" }}>
            <ion-icon
              name="checkmark-circle"
              style={{ fontSize: 22, color: "rgb(0, 204, 255)" }}
            />
            <p style={{ display: "inline" }}>
              Lorem, ipsum dolor sit amet consectetur repudiandae architecto expedita
              magnam vero
            </p>
          </div>
          <div style={{ display: "block" }}>
            <ion-icon name="arrow-down" style={{ fontSize: 72 }} />
          </div>
          <div style={{ display: "block" }}>
            <p className={styles.highlighted}>THIS COURSE IS FOR YOU</p>
          </div>
        </div>
      </div>
    </>
  )
}