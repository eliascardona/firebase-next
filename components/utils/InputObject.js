import React, { useEffect, useState } from "react";
import styles from "../../styles/VideoList.module.css";
// import { firestore, auth } from "../../firebase/base";
// import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";

export default function InputList({ quiz }) {
    const marginLeft = {
        marginLeft:'5px'
    }
    
    return (
        <>
            <div className={styles.quizBox}>
                <h3>{quiz.pregunta}</h3>

                <div style={{ display: `${ quiz.visibility===true ? 'block' : 'none' }` }}>
                    <input type="radio" value={quiz.res1}/>
                    <label style={marginLeft}>{quiz.res1}</label>
                    <br/>
                </div>

                <div style={{ display: `${ quiz.visibility===true ? 'block' : 'none' }` }}>
                    <input type="radio" value={quiz.res2}/>
                    <label style={marginLeft}>{quiz.res2}</label>
                    <br/>
                </div>

                <div style={{ display: `${ quiz.visibility===true ? 'block' : 'none' }` }}>
                    <input type="radio" value={quiz.res3}/>
                    <label style={marginLeft}>{quiz.res3}</label>
                    <br/>
                </div>

                <div style={{ display: `${ quiz.visibility===true ? 'block' : 'none' }` }}>
                    <input type="radio" value={quiz.res4}/>
                    <label style={marginLeft}>{quiz.res4}</label>
                    <br/>
                </div>

            </div>
        </>
    );
}