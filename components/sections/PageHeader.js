import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Landing.module.css'

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Image width={100} height={100} src="/images/logo.jpg"></Image>
        </div>
      </header>
    </>
  )
}