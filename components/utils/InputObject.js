import React, { useState } from "react";
import styles from "../../styles/forms.module.css";

export default function InputList({ quiz, addToGoodAns }) {
  const [ans, setAns] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (ans === quiz.resCorr) {
      setMessage("Correct answer");
      addToGoodAns(quiz.resCorr);
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
