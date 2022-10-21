import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/videos.module.css";
import { PageHeader } from "../../components/sections/PageHeader";
import { Header } from "../../components/utils/Header";
import { Login } from "../../components/vitals/Login";
import { firestore, auth } from "../../firebase/base";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

const videos = () => {
  const loginRef = useRef();
  const appRef = useRef();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const checkUserEmail = () => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          loginRef.current.style.display="block";
        } else {
          appRef.current.style.display="block";
        }
      });
    };
    checkUserEmail();
  });

  useEffect(() => {
    const getVideos = async () => {
      const coll = await getDocs(collection(firestore, "videos"));
      const collDocs = coll.docs;
      const data = [];
      collDocs.forEach(async (doc) => {
        data.push(doc.data());
      });
      setVideos(data);
    };
    getVideos();
  }, []);

  const logOut = async () => {
    await signOut(auth);
    window.location.reload();
  };
  
  return (
    <>
      <div ref={loginRef} style={{display:'none'}}>
        <PageHeader />
        <div className={styles.centeredGrid}>
          <div className={styles.cardWhite}>
            <Login />
          </div>
        </div>
      </div>
      <div ref={appRef} style={{display:'none'}}>
        <Header />
        <div className={styles.grid}>
          <div className={styles.i1}>
            <div className={styles.img}>
              <div className={styles.imgDiv}>
                <Image width={576} height={250} src="/images/poster.jpg"></Image>
              </div>
            </div>
            <h2 className={styles.padded}>Course title</h2>
            <h3 className={styles.padded}>Course little description</h3>
            <p className={styles.padded}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              hic officia repellat, animi voluptatum maiores dolorum expedita
              beatae architecto fugit debitis reiciendis vel fuga commodi cumque
              ipsam est nulla nesciunt, culpa adipisci fugiat perspiciatis.
              Pariatur, provident voluptates! Sunt doloremque ea saepe, expedita
              odio libero modi maxime dignissimos necessitatibus laudantium
              mollitia!
            </p>
            <button
              type="button"
              className={styles.customBtn}
              onClick={logOut}
            >
              Log out
            </button>
          </div>
          <div className={styles.i2}>
            <h2 className={styles.padded}>Time to study!</h2>
            <h3 className={styles.padded}>Some motivation phrase</h3>
            {videos.map((video) => (
              <Link href={`/videos/${video.id}`} key={video.id}>
                <a style={{ textDecoration: "none", color: "inherit" }}>
                  <span className={styles.lines}>Lesson {video.title}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default videos;