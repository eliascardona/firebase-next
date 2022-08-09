import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'

export const SectionNine = () => {
  return (
    <>
      <div className={styles.darkTitleSection}>
        <div className={styles.centeredGrid}>
          <div className={styles.textCenter}>
            <h1>Content of the course</h1>
          </div>
        </div>
      </div>      
    </>
  )
}