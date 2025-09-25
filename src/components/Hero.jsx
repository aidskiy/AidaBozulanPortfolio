import React from "react";
import { getImageUrl } from "../utils";
import styles from "../components/Hero.module.css";
import Typewriter from "./Typewriter";
import { ViewResumeButton } from "./ViewResumeButton/ViewResumeButton";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi! My name is Aida Bozulan</h1>
                <p className={styles.description}>
                    <Typewriter text="Welcome to my Website" delay={150} infinite />
                </p>
                <ViewResumeButton />
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}></img>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};