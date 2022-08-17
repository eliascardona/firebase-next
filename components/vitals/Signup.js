import React, { useRef } from "react";
import { auth, firestore } from "../../firebase/base";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import styles from "../../styles/forms.module.css";

export const Signup = ({ setStep }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const signUp = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(firestore, `users/${res.user.email}`), {
      nombre: name,
      email: res.user.email,
      id: res.user.uid,
      viewed: [],
    });
    setStep(1);
  };

  const logOut = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <>
      <h2>Create an account</h2>
      <input
        type="text"
        ref={nameRef}
        placeholder="Name"
        className={styles.input}
      />
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
        className={styles.formBtn}
        onClick={signUp}
      >
        Sign up
      </button>
      <small className={styles.payMsg}>
        If you entered a wrong email, you could log out
        <span onClick={logOut} className="text-primary">
          {" "}
          <u style={{ cursor: "pointer" }}>here</u>
        </span>
      </small>
    </>
  );
};