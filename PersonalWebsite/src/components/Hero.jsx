import React from "react";
import { getImageUrl } from "../utils";
import styles from "../components/Hero.module.css";
import Typewriter from "./Typewriter";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hai, I'm Aida</h1>
                <p className={styles.description}>
                    <Typewriter text="Welcome to my Website" delay={100} infinite />
                </p>
                <a href="mailto:aidabozulan@gmail.com" className={styles.contactBtn}> Email contact</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}></img>
                <div className={styles.topBlur}></div>
                <div className={styles.bottomBlur}></div>
        </section>
    );
};