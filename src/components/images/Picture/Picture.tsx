import React from 'react';
import styles from './Picture.module.css'
import {stack} from "../../../hooks/useClassName";

type PictureProps = {
    desktopIImageX1: string,
    desktopIImageX2: string,
    mobileIImageX1: string,
    mobileIImageX2: string,
    className?: string,

    imageClassName?: string
}
const Picture = ({desktopIImageX1, mobileIImageX1, desktopIImageX2, mobileIImageX2, className, imageClassName}: PictureProps) => {
    return (
        <picture className={stack(styles.picture, className)}>
            <source className={stack(imageClassName,styles.image)} srcSet={`${mobileIImageX1} 1x, ${mobileIImageX2} 2x`}/>
            <img className={stack(imageClassName,styles.image)} src={desktopIImageX1} srcSet={`${desktopIImageX2} 2x`} alt=""/>
        </picture>
    );
};

export default Picture;
