import React from 'react';
import styles from './ToTopButton.module.css'
import {stack} from "../../../hooks/useClassName";

type ToTopButtonProps = {
    className: string
}
const ToTopButton = ({className}:ToTopButtonProps) => {
    const clickHandler = () => {
        scrollTo(0, 0)
    }
    return (
        <button onClick={clickHandler} className={stack('link',styles.body, className)}>
            <p className={styles.text}>Наверх</p>
            <img src="/image/arrow-up.png" className={styles.icon} alt=""/>
        </button>
    );
};

export default ToTopButton;
