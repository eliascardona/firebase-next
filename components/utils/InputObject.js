import React, { useState } from "react";
import styles from "../../styles/forms.module.css";
import { auth, firestore } from "../../firebase/base";
import { doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function InputList({ quiz }) {
  const [ans, setAns] = useState("");
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const goodAnswerArr = [];
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserEmail(user.email);
    }
  });
  const docRef = doc(firestore, `users/${userEmail}`);
  
  const checkAnswer = () => {
    if(ans === quiz.resCorr) {
      setMessage("Correct answer");
      goodAnswerArr.push(quiz.resCorr);
      let dataObj = {
        goodAnswers: goodAnswerArr
      }
      console.log(dataObj);
      //just for set an 'async-await'
      (async function() {
        await updateDoc(docRef, dataObj);        
      })();
      //...
    } else {
      setMessage("Wrong answer. Try again");
    }
  };

  return (
    <>
      <h3>{quiz.pregunta}</h3>

      <label className={styles.radio}>
        <input
          type="radio"
          value={quiz.res1}
          name="quiz"
          onChange={() => setAns(quiz.res1)}
        />
        {quiz.res1}
      </label>

      <label className={styles.radio}>
        <input
          type="radio"
          value={quiz.res2}
          name="quiz"
          onChange={() => setAns(quiz.res2)}
        />
        {quiz.res2}
      </label>

      <label className={styles.radio}>
        <input
          type="radio"
          value={quiz.res3}
          name="quiz"
          onChange={() => setAns(quiz.res3)}
        />
        {quiz.res3}
      </label>

      <label className={styles.radio}>
        <input
          type="radio"
          value={quiz.res4}
          name="quiz"
          onChange={() => setAns(quiz.res4)}
        />
        {quiz.res4}
      </label>

      <button type="button" className={styles.formBtn} onClick={checkAnswer}>
        Check answer
      </button>

      <div>{message}</div>
    </>
  );
}