import React, { useRef } from "react";
import { auth } from "../../firebase/base";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from "../../styles/forms.module.css";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(auth, email, password);
    window.location.reload();
  };

  return (
    <>
      <h2>Enter your credentials</h2>
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          className={styles.input}
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className={styles.input}
        />
        <button
          type="button"
          onClick={login}
          className={styles.formBtn}
        >
          Login
        </button>
    </>
  )
}