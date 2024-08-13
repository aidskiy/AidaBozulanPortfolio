import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../About/About.module.css";

export const About = () =>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                lkvndsknvknsdknvks
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Scientist</h3>
                            <p>
                                slknvdklnsdkvnksjnv
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>ajbvbksjv</h3>
                            <p>
                                sdlkvndlsn
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};