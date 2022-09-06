import React from 'react'
import { Login } from '../components/vitals/Login'
import styles from '../styles/Landing.module.css'

function login() {
  return (
    <>
      <div className={styles.centeredGrid}>
        <div className={styles.cardWhite}>
          <Login />
        </div>
      </div>
    </>
  )
}

export default login