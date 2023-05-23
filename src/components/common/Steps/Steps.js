import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Steps.module.css';
import { stack } from "../../../hooks/useClassName";
import { useCommonSection } from "../../../hooks/useCommonSection";
import { Link } from "react-router-dom";
const Steps = () => {
    const [section] = useCommonSection('kak-oformit-zakaz');
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsx("h2", { className: stack('title-secondary', styles.title), dangerouslySetInnerHTML: { __html: section?.orderSteps?.zagolovok } }), _jsx("ul", { className: styles.list, children: section?.orderSteps?.spisok?.map((item, index) => _jsxs("li", { className: styles.item, children: [_jsxs("div", { className: styles.item__top, children: [_jsx("h3", { className: stack('text-secondary', styles.item__title), dangerouslySetInnerHTML: { __html: item?.nomer } }), _jsx("div", { className: styles.item__decor })] }), _jsxs("p", { className: stack(styles.item__content), children: [_jsx("span", { className: stack('text-secondary', styles.item__text), dangerouslySetInnerHTML: { __html: item?.tekst } }), " \u00A0", item?.estLiSsylkaVTekste === "true" && _jsx(Link, { className: stack('link', 'text-secondary', styles.item__text, styles.item__link), to: item?.adresSsylki, children: item?.tekstSsylki })] })] }, index)) })] }));
};
export default Steps;
