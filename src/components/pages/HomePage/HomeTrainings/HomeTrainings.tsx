import {useEffect, useState} from 'react';
import {stack} from "../../../../hooks/useClassName";
import styles from './HomeTrainings.module.css'
import {useGlobalContext} from "../../../../context/context";
import {Link} from "react-router-dom";
import {sortDate} from "../../../../hooks/useSortDate";
import Picture from "../../../images/Picture/Picture";
import {TrainingsNode} from "../../../../types/data";

const HomeTrainings = () => {

    const {mainPage:page, data} = useGlobalContext()


    const [trainings, setTrainings] = useState<TrainingsNode[]>()

    useEffect(() => {
        if (data) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setTrainings(sortDate(data?.trainings?.nodes).filter((item, index) => index < 5))
        }
    }, [data])


    return (
        <section className={stack('container', 'section-indent', styles.body)}>
            <h2 className={stack('title-secondary',styles.title)}>{page?.main?.mainTrainingZagolovok}</h2>
            <ul className={styles.list}>
                {trainings?.map((item,index) => <Link to={''} key={index} className={stack(styles.list__item)}>
                    <Picture className={styles.item__image}
                             desktopIImageX1={item.training?.trainingImageKompyuter1x?.sourceUrl}
                             desktopIImageX2={item.training?.trainingImageKompyuter2x?.sourceUrl}
                             mobileIImageX2={item.training?.trainingImageTelefon2x?.sourceUrl}
                             mobileIImageX1={item.training?.trainingImageTelefon1x?.sourceUrl}></Picture>
                    <div className={styles.item__content}>
                        <div className={styles.item__top}>
                            <h3 className={stack('text-primary', styles.item__title)}
                                dangerouslySetInnerHTML={{__html: item.training?.nazvanie}}></h3>
                            <p className={stack('text-primary', styles.item__price)}
                               >{item?.training?.trainingCzena.toLocaleString()} руб.</p>
                        </div>
                        <p className={stack('text-small', styles.item__text)}
                           dangerouslySetInnerHTML={{__html: item?.training?.trainingKratkoeOpisanie}}></p>
                    </div>
                </Link>)}
            </ul>
            <Link className={stack('button-primary', styles.button)}
                to={page?.main?.mainTrainingAdresSsylki}>{page?.main?.mainTrainingTekstSsylki}</Link>
        </section>
    );
};

export default HomeTrainings;
