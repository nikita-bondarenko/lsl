import React from 'react';
import styles from './TrainingsAdvantages.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";

const TrainingsAdvantages = () => {
    const {trainingsPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            {trainingsPage.trainings.trainingsAdvantagesSpisok.map((item, index) => <div key={index}
                                                                                         className={styles.item}>
                <img className={styles.image} src={item.dekor.sourceUrl} alt={item.dekor.altText}/>
                <p className={styles.title}>{item.zagolovok}</p>
                <p className={styles.text}> {item.tekst}</p>
            </div>)}
        </div>
    );
};

export default TrainingsAdvantages;