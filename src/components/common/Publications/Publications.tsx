import React, {createRef, useEffect, useLayoutEffect, useState} from 'react';
import {useGlobalContext} from "../../../context/context";
import {NodePublications, PublicationsNode} from "../../../types/data";
import {sortDate} from "../../../hooks/useSortDate";
import {stack} from "../../../hooks/useClassName";
import styles from "./Publications.module.css";
import Picture from "../../images/Picture/Picture";
import {Link} from "react-router-dom";
import SwiperLight from "../../lowleveled/SwiperLight/SwiperLight";


const SlideItem = (item : PublicationsNode) => {

    return <Link to={''} onMouseMove={  (e) => e.preventDefault()} className={stack('link',styles.item)}>
            <Picture  imageClassName={styles.item__image} className={styles.item__picture}
                      desktopIImageX1={item?.publications?.publicationsImageKompyuter1x?.sourceUrl}
                      desktopIImageX2={item?.publications?.publicationsImageKompyuter2x?.sourceUrl}
                      mobileIImageX1={item?.publications?.publicationsImageTelefon1x?.sourceUrl}
                      mobileIImageX2={item?.publications?.publicationsImageTelefon2x?.sourceUrl}></Picture>
            <p  className={stack('text-secondary', styles.item__text)}
                dangerouslySetInnerHTML={{__html: item?.publications?.publicationsKratkoeOpisanie}}></p>
        </Link>
}


const Publications = () => {

    const { data} = useGlobalContext()

    const [publications, setPublications] = useState<PublicationsNode[]>()

    useEffect(() => {
        if (data) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setPublications(sortDate(data?.publications?.nodes))
        }
    }, [data])


    return (
        <section className={stack('container', 'section-indent', styles.body)}>
            <div className={styles.content}>
                <h2 className={stack('title-secondary', styles.title)}
                  >Публикации</h2>
            </div>

            <div className={styles.slider}>
                <SwiperLight>
                <div className={styles.slider__list}>
                        {publications?.map((item, index) => <SlideItem key={index} {...item}></SlideItem> )}
                </div>
                </SwiperLight>
            </div>
        </section>
    );
};

export default Publications;
