import React, { useEffect, useState } from "react";
import { Header } from "../../components/utils/Header";
import VideoList from "../../components/utils/VideoList";
import InputObject from "../../components/utils/InputObject";
import styles from "../../styles/id.module.css";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { auth, firestore } from "../../firebase/base";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function Details() {
  const router = useRouter();
  const [videoId, setVideoId] = useState("");
  const { id } = router.query;
  const [userEmail, setUserEmail] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [step, setStep] = useState(0);
  const [goodAns, setGoodAns] = useState([]);
  const [quizIterator, setQuizIterator] = useState(0);
  const [quizLength, setQuizLength] = useState(0);

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
    const getQuizzes = async () => {
      const quizzesColl = await getDocs(collection(firestore, `quizzes`));
      const quizzesDocs = quizzesColl.docs;
      const tempQuizzes = [];
      quizzesDocs.forEach((quiz) => {
        tempQuizzes.push(quiz.data());
      });
      tempQuizzes = tempQuizzes.filter((tempQuiz, i, arr) => {
        if (tempQuiz.videos.includes(id)) {
          setQuizIterator(i);
          let length = arr.length;
          setQuizLength(length);
          return true;
        }
        return false;
      });
      setQuizzes(tempQuizzes);
    };
    setVideoId(id);
    getQuizzes();
  }, [id]);

  const opts = {
    playerVars: {
      frameborder: 0,
    },
  };

  const onVideoEnd = async () => {
    await updateDoc(doc(firestore, `users/${userEmail}`), {
      viewed: arrayUnion(videoId),
    });
  };

  const addToGoodAns = async (newGoodAns) => {
    setGoodAns((prev) => [...prev, newGoodAns]);
  };

  return (
    <>
      <Header />
      <div className={styles.grid}>
        <div className={styles.i1}>
          <div className={styles.videoWrapper}>
            <YouTube videoId={id} opts={opts} onEnd={onVideoEnd} />
          </div>
          <div className={styles.line}>
            <h3>In this lesson...</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              hic officia repellat, animi voluptatum maiores dolorum expedita
              beatae architecto fugit debitis reiciendis vel fuga commodi cumque
              ipsam est nulla nesciunt, culpa adipisci fugiat perspiciatis.
              Pariatur, provident voluptates! Sunt doloremque ea saepe, expedita
              odio libero modi maxime dignissimos necessitatibus laudantium
              mollitia!
            </p>
          </div>
          <div className={styles.lineLg}>
            {quizzes.map((quiz, i) => {
              return quizLength.length - 1 === quizIterator ? (
                `Quiz`
              ) : (
                <div style={{ display: `${step === i ? "block" : "none"}` }} key={quiz.id}>
                  <InputObject quiz={quiz} addToGoodAns={addToGoodAns} />
                  <button
                    type="button"
                    className={styles.formBtn}
                    onClick={() => setStep((stp) => stp - 1)}
                  >
                    <ion-icon name="arrow-back-outline" style={{ fontSize:24 }}></ion-icon>
                  </button>

                  <button
                    type="button"
                    className={styles.formBtn}
                    onClick={() => setStep((stp) => stp + 1)}
                  >
                    <ion-icon name="arrow-forward-outline" style={{ fontSize:24 }}></ion-icon>
                  </button>
                </div>
              );
            })}
          </div>
          {quizzes.length === step && (
            <div className={styles.lineLg}>
              You got following correct answers:
              <ol>
                {goodAns.map((g) => (
                  <li>{g}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
        <div className={styles.i2}>
          <VideoList />
        </div>
      </div>
    </>
  );
}
