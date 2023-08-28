import React from 'react';
import styles from './HistoryProjects.module.css'
import {useGlobalContext} from "../../../../context/context";
import {stack} from "../../../../hooks/useClassName";
import Picture from "../../../images/Picture/Picture";

const HistoryProjects = () => {
    const {historyPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent-new' , styles.body)}>
            <div className={styles.top}>
                <h2 className={stack('text-lg', styles.title)}>{historyPage.history.historyProjectsZagolovok}</h2>
                <p className={stack('text-sm', styles.text)}>{historyPage.history.historyProjectsTekst}</p>
            </div>
            <ul className={styles.list}>
                {historyPage.history.historyProjectsSpisok.map((item, index) => <li key={index} className={styles.list__item}>
                    <Picture imageClassName={styles.image} className={styles.picture}
                             alt={item.kompyuterX1.altText}
                             desktopIImageX1={item.kompyuterX1.sourceUrl}
                             desktopIImageX2={item.kompyuterX2.sourceUrl}
                             mobileIImageX1={item.telefonX1.sourceUrl}
                             mobileIImageX2={item.telefonX2.sourceUrl}></Picture>
                </li>)}

            </ul>
        </div>
    );
};

export default HistoryProjects;