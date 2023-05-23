import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './HomeValues.module.css';
import { stack } from "../../../../hooks/useClassName";
import { useGlobalContext } from "../../../../context/context";
const HomeValues = () => {
    const { mainPageData } = useGlobalContext();
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsx("div", { className: styles.title, children: _jsx("h2", { className: stack('title-secondary'), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainValuesZagolovok } }) }), _jsx("ul", { className: styles.list, children: mainPageData?.page?.main?.mainValuesSpisok?.map((item, index) => _jsxs("li", { className: styles.item, children: [_jsx("h3", { className: styles?.item__number, children: item?.mainValuesNomer }), _jsx("p", { className: stack('text-secondary', styles.item__text), dangerouslySetInnerHTML: { __html: item?.mainValuesTekst } })] }, index)) })] }));
};
export default HomeValues;
