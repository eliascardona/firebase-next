import React from "react";
import Image from "next/image";
import styles from "../../styles/Landing.module.css";

export const PageHeader = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Image width={160} height={80} src="/images/logo.jpg" alt="logotype"></Image>
        </div>
      </header>
    </>
  );
};