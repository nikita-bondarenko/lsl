import React, {createRef} from 'react';
import {useGlobalContext} from "../../../../context/context";
import styles from './HistoryHistory.module.css'
import {stack} from "../../../../hooks/useClassName";
import SwiperLight from "../../../lowleveled/SwiperLight/SwiperLight";

const HistoryHistory = () => {
    const {historyPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent', styles.body)}>
            <h2 className={stack('text-lg', styles.title)}>{historyPage.history.historyHistoryZagolovok}</h2>
            <SwiperLight>
                <ul className={styles.list}>
                    {historyPage.history.historyHistoryList.map((item, index) => {

                        const top = createRef<HTMLDivElement>()

                        const decorItem = createRef<HTMLDivElement>()

                        return <li key={index} className={styles.item}>
                            <div className={styles.item__top}>
                                <p className={styles.item__year}>{item.god}</p>
                                <div ref={top} className={styles.decor}>
                                    <div ref={decorItem} className={styles.decor__item}></div>
                                </div>
                            </div>
                            <p className={stack('text-sm',styles.text)}></p>
                        </li>
                    })}
                </ul>
            </SwiperLight>
        </div>
    );
};

export default HistoryHistory;