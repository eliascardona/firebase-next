import React, { useEffect, useState } from "react";
import styles from "../../styles/VideoList.module.css";
import Link from "next/link";
import { firestore, auth } from "../../firebase/base";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function InputList({quizCollection}) {
  const [inputs, setInputs] = useState([]);
  const [does, setDoes] = useState([]);
  // const [prog, setProg] = useState(0);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const checkUserEmail = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserEmail(user.email);
        }
      });
    };
    checkUserEmail();
  });

  useEffect(() => {
    const fetchData = async () => {
      const coll = await getDocs(collection(firestore, quizCollection));
      const collDocs = coll.docs;
      const data = [];
      collDocs.forEach(async (doc) => {
        data.push(doc.data());
      });
      setInputs(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      onSnapshot(doc(firestore, `users/${userEmail}`), (coll) => {
        const done = coll.get("done");
        setDoes(done);
      });
    };
    if (userEmail) fetchData();
  }, [userEmail]);

  const reactQuiz = () => {
    inputs.map(item => {
      return (
        <>
          <h3>{item.titulo}</h3>
          <label>{item.res1}</label>
          <input 
            type="radio"
            // ref={childRef}
            placeholder="Tu respuesta"
            value={item.res1}
            className={styles.input}
          />
          <label>{item.res2}</label>
          <input 
            type="radio"
            // ref={childRef}
            placeholder="Tu respuesta"
            value={item.res2}
            className={styles.input}
          />
          <label>{item.res3}</label>
          <input 
            type="radio"
            // ref={childRef}
            placeholder="Tu respuesta"
            value={item.res3}
            className={styles.input}
          />
          <label>{item.res4}</label>
          <input 
            type="radio"
            // ref={childRef}
            placeholder="Tu respuesta"
            value={item.res4}
            className={styles.input}
          />
        </>
      );
      switch (item) {
        case "correct answer":
          {/*print succesful message*/}
          break;
      
        default:
          {/*print try again*/}
          break;
      }
    })
  }

  // useEffect(() => {
  //   setProg((does.length*100)/inputs.length);
  // }, [inputs, does]);
  
  /* <h4> {prog}% </h4>
        <progress
          className={styles.progressBar}
          style={{ width: `${prog}` }}
          max="100"
          value={`${prog}`}
        ></progress> */
        
  return (
    <>
      <div className={styles.quizBox}>
        
      </div>
    </>
  );
}