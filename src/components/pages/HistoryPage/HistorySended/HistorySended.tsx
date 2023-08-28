import React from 'react';
import styles from './HistorySended.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";
import history from "../../../../pages/History";

const HistorySended = () => {
    const {historyPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <div className={styles.top}>
                <h2 className={stack('text-lg', styles.title)}>
                    {historyPage.history.historySendedNachaloPervojStroki}
                    <span
                        className={styles.title__marked}>{historyPage.history.historySendedVydelennyjTekstPervojStroki}</span>
                    {historyPage.history.historySendedKoneczPervojStroki}
                </h2>
                <p className={styles.subtitle}>
                    <span
                        className={styles.subtitle__marked}>{historyPage.history.historySendedVydelennyjTekstVtorojStroki} </span>
                    {historyPage.history.historySendedKoneczVtorojStroki}
                </p>
                <p className={styles.subtitle}>{historyPage.history.historySendedTretyaStroka}</p>
            </div>
            <div className={styles.display}>
                {historyPage.history.historySendedGoroda.map((row, index) => <div key={index} className={styles.display__row}>
                    {row.strokaGorodov.map((item, index) => <div key={index} className={styles.display__item}>
                        <img src={item.izobrazhenie.sourceUrl} alt={item.izobrazhenie.altText}/>
                        <p className={styles.display__text}>{item.nazvanieGoroda}</p>
                    </div>)}
                </div>)}
            </div>
        </div>
    );
};

export default HistorySended;