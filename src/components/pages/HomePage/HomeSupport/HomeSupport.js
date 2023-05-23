import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './HomeSupport.module.css';
import { stack } from "../../../../hooks/useClassName";
import { useGlobalContext } from "../../../../context/context";
const HomeSupport = () => {
    const { mainPageData } = useGlobalContext();
    const [selectedSum, setSelectedSum] = useState(0);
    const [text, setText] = useState('');
    const [isFormInvalid, settIsFormInvalid] = useState(true);
    useEffect(() => {
        settIsFormInvalid(!text || !selectedSum);
    }, [text, selectedSum]);
    return (_jsxs("section", { className: stack('container', 'section-indent', styles.body), children: [_jsxs("div", { className: styles.content, children: [_jsx("h2", { className: stack('title-secondary', styles.title), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainSupportZagolovok } }), _jsx("p", { className: stack('text-simple', styles.text), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainSupportTekst } }), _jsx("p", { className: stack('remark', styles.remark), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainSupportRemarka } })] }), _jsxs("div", { className: styles.donation, children: [_jsx("div", { className: styles.donation__buttons, children: mainPageData?.page?.main?.mainSupportSpisokVozmozhnyhPozhertvovanij?.map((item) => _jsxs("button", { onClick: () => setSelectedSum(item.mainSupportSpisokSumma), className: stack(styles.donation__button, item.mainSupportSpisokSumma === selectedSum && styles.selected), children: [item?.mainSupportSpisokSumma.toLocaleString(), " \u20BD"] }, item.mainSupportSpisokSumma)) }), _jsxs("div", { className: styles.donation__bottom, children: [_jsx("textarea", { onChange: e => setText(e.target.value), className: styles.input, placeholder: 'Ваш комментарий' }), _jsx("button", { className: stack('button-primary', styles.submit, isFormInvalid && 'disabled'), children: mainPageData?.page?.main?.mainSupportTekstKnopki })] }), _jsx("p", { className: stack('remark', styles.remark), dangerouslySetInnerHTML: { __html: mainPageData?.page?.main?.mainSupportRemarkaVnizu } })] })] }));
};
export default HomeSupport;
