import React from 'react';
import styles from './Online.module.css'
import {stack} from "../../../hooks/useClassName";
import {useCommonSection} from "../../../hooks/useCommonSection";

type OnlineProps = {
    className?: string,
    isSmall?: boolean,
}
const Online = ({className} : OnlineProps) => {
    const [section] = useCommonSection('budem-na-svyazi')
    return (
        <div className={stack('container-new', 'section-indent-new', styles.body, className)}>
            <div className={styles.content}>
                <h2 className={stack("text-lg", styles.title)}
                    dangerouslySetInnerHTML={{__html: section.online.onlineTekst}}></h2>
                <p className={stack('text-sm', styles.text)}
                   dangerouslySetInnerHTML={{__html: section.online.onlineTekst}}></p>
            </div>
            <form className={styles.form}>
                <div className={styles.form__section}>
                    <input className={styles.input} type="text"/>
                    <p className={styles.error}></p>
                </div>
                <button className={stack('button-primary', styles.button)}>{section.online.onlineTekstKnopki}</button>
            </form>
        </div>
    );
};

export default Online;