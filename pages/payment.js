import React, { useRef, useState } from "react";
import styles from "../styles/payment.module.css";
import { PageHeader } from "../components/sections/PageHeader";
import { Signup } from "../components/vitals/Signup";
import { Features } from "../components/utils/Features";
import { PaymentCompleteElem } from "../components/vitals/PaymentCompleteElem"

function Payment() {
  const signupRef = useRef();
  const paymentRef = useRef();
  const [step, setStep] = useState(0);
  
  return (
    <>
      <PageHeader />
      <div className={styles.col6}>
        <div className={styles.el}>
          <h1 className={styles.left}>Get into the course!</h1>
          <Features
            prodName="Master coding course"
            price="$97 USD"
            imgSrc="/images/product.jpg"
            imgAlt="product image" />
        </div>
        <div className={styles.el}>
          <div ref={signupRef} style={{ display: `${step === 0 ? "block" : "none"}` }} >
            <Signup setStep={setStep} />
          </div>
          <div ref={paymentRef} style={{ display: `${step === 1 ? "block" : "none"}` }} >
            <PaymentCompleteElem />
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment;