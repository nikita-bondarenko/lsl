import React from 'react';
import styles from './TrainingsDelivery.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";
const TrainingsDelivery = () => {
    const {trainingsPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent-new')}>
            <h2 className={stack('text-lg', styles.title)} dangerouslySetInnerHTML={{__html:trainingsPage.trainings.trainingsDeliveryZagolovok}}></h2>
            <ul className={styles.list}>
                {trainingsPage.trainings.trainingsDeliverySpisok.map((item,index) => <li key={index} className={styles.list__item}>
                    <img className={styles.item__image} src={item.dekor.sourceUrl} alt={item.dekor.altText}/>
                    <p className={styles.item__text} dangerouslySetInnerHTML={{__html: item.tekst}}></p>
                </li>)}
            </ul>
        </div>
    );
};

export default TrainingsDelivery;