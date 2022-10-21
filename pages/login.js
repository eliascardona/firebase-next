import React from 'react'
import { PageHeader } from '../components/sections/PageHeader'
import { Login } from '../components/vitals/Login'
import styles from '../styles/login.module.css'

function login() {
  return (
    <>
      <PageHeader />
      <div className={styles.centeredGrid}>
        <div className={styles.cardWhite}>
          <Login href="/videos" />
        </div>
      </div>
    </>
  )
}

export default login