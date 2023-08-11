import React from 'react';
import styles from './Logo.module.css'
import {Link} from "react-router-dom";
import {stack} from "../../../hooks/useClassName";

type LogoProps = {
    mobileUrl: string,
    desktopUrl: string,

    className: string
}
const Logo = ({desktopUrl, mobileUrl ,className}: LogoProps) => {
    return (
        <Link to={'/'} className={stack('link',styles.link, className)}>
            <picture className={styles.picture}>
                <source className={styles.image} srcSet={mobileUrl} media="(max-width: 1023px)"/>
                <img className={styles.image} src={desktopUrl} alt="Логотип"/>
            </picture>
        </Link>

    );
};

export default Logo;
