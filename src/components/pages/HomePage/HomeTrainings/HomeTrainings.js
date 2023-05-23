import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { stack } from "../../../../hooks/useClassName";
import styles from './HomeTrainings.module.css';
import { useGlobalContext } from "../../../../context/context";
import { Link } from "react-router-dom";
import { sortDate } from "../../../../hooks/useSortDate";
import Picture from "../../../images/Picture/Picture";
const HomeTrainings = () => {
    const { mainPageData, trainings: trainingsData } = useGlobalContext();
    const [trainings, setTrainings] = useState();
    useEffect(() => {
        if (trainingsData) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setTrainings(sortDate(trainingsData?.trainings?.nodes).filter((item, index) => index < 5));
        }
    }, [trainingsData]);
    useEffect(() => {
        console.log(trainings);
    }, [trainings]);
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsx("h2", { className: stack('title-secondary', styles.title), children: mainPageData?.page?.main?.mainTrainingZagolovok }), _jsx("ul", { className: styles.list, children: trainings?.map((item, index) => _jsxs(Link, { to: '', className: stack(styles.list__item), children: [_jsx(Picture, { className: styles.item__image, desktopIImageX1: item.training?.trainingImageKompyuter1x?.sourceUrl, desktopIImageX2: item.training?.trainingImageKompyuter2x?.sourceUrl, mobileIImageX2: item.training?.trainingImageTelefon2x?.sourceUrl, mobileIImageX1: item.training?.trainingImageTelefon1x?.sourceUrl }), _jsxs("div", { className: styles.item__content, children: [_jsxs("div", { className: styles.item__top, children: [_jsx("h3", { className: stack('text-primary', styles.item__title), dangerouslySetInnerHTML: { __html: item.training?.nazvanie } }), _jsxs("p", { className: stack('text-primary', styles.item__price), children: [item?.training?.trainingCzena.toLocaleString(), " \u0440\u0443\u0431."] })] }), _jsx("p", { className: stack('text-small', styles.item__text), dangerouslySetInnerHTML: { __html: item?.training?.trainingKratkoeOpisanie } })] })] }, index)) }), _jsx(Link, { className: stack('button-primary', styles.button), to: mainPageData?.page?.main?.mainTrainingAdresSsylki, children: mainPageData?.page?.main?.mainTrainingTekstSsylki })] }));
};
export default HomeTrainings;
