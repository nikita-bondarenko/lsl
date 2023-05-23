import styles from './HomeValues.module.css'
import {stack} from "../../../../hooks/useClassName";
import {useGlobalContext} from "../../../../context/context";

const HomeValues = () => {
    const {mainPageData} = useGlobalContext()
    return (
        <section className={stack('container', 'section-indent', styles.body)}>
            <div className={styles.title}>
                <h2 className={stack('title-secondary')}
                    dangerouslySetInnerHTML={{__html: mainPageData?.page?.main?.mainValuesZagolovok}}></h2>
            </div>
            <ul className={styles.list}>
                {mainPageData?.page?.main?.mainValuesSpisok?.map((item, index) => <li key={index}
                                                                                      className={styles.item}>
                    <h3 className={styles?.item__number}>{item?.mainValuesNomer}</h3>
                    <p className={stack('text-secondary', styles.item__text)}
                       dangerouslySetInnerHTML={{__html: item?.mainValuesTekst}}></p>
                </li>)}
            </ul>
        </section>
    );
};

export default HomeValues;
