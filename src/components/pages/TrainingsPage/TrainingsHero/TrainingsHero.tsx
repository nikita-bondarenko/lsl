import React from 'react';
import styles from './TrainingsHero.module.css'
import {useGlobalContext} from "../../../../context/context";
import {stack} from "../../../../hooks/useClassName";
import Picture from "../../../images/Picture/Picture";


const TrainingsHero = () => {
    const {trainingsPage} = useGlobalContext()
    return (
        <div className={stack('container-new', styles.body, 'section-indent-new')}>
            <Picture imageClassName={styles.image} className={styles.picture}
                     alt={trainingsPage?.trainings.trainingsHeroIzobrazhenieDlyaKompyuteraX1.altText}
                     desktopIImageX1={trainingsPage?.trainings.trainingsHeroIzobrazhenieDlyaKompyuteraX1.sourceUrl}
                     desktopIImageX2={trainingsPage?.trainings.trainingsHeroIzobrazhenieDlyaKompyuteraX2.sourceUrl}
                     mobileIImageX1={trainingsPage?.trainings.trainingsHeroIzobrazhenieDlyaTelefonaX1.sourceUrl}
                     mobileIImageX2={trainingsPage?.trainings.trainingsHeroIzobrazhenieDlyaTelefonaX2.sourceUrl}></Picture>
            <div className={stack(styles.content)}>
                <h1 className={styles.title}>{trainingsPage?.trainings.trainingsHeroZagolovok}</h1>
                <p className={styles.text}> {trainingsPage?.trainings.trainingsHeroPodzagolovok}</p>
            </div>
        </div>
    );
};

export default TrainingsHero;