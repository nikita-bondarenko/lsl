import React from 'react';
import styles from './HistoryFind.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";
import {Link} from "react-router-dom";
const HistoryFind = () => {
    const {historyPage} = useGlobalContext()

    return (
        <div className={stack('container-new', 'section-indent-new', styles.body)}>
            <h2 className={stack('text-lg',styles.title)}>{historyPage.history.historyFindTrainingTekst}</h2>
            <Link to={historyPage.history.historyFindTrainingAdresSsylki} className={stack('button-secondary-new', 'link',styles.link)}></Link>
        </div>
    );
};

export default HistoryFind;