import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './Cookies.module.css';
import { stack } from "../../../hooks/useClassName";
import { useCommonSection } from "../../../hooks/useCommonSection";
const Cookies = () => {
    const [section] = useCommonSection('cookies');
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 7000);
    }, []);
    const clickHandler = () => {
        setOpen(false);
    };
    return (_jsx("div", { className: stack(styles.content, 'container'), children: _jsx("div", { className: styles.wrapper, children: _jsxs("div", { className: stack(styles.body, open && styles.open), children: [_jsxs("p", { className: styles.text, children: ["\u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C ", _jsx("a", { href: section?.cookies?.cookiesPolitikaKonfidenczialnosti?.mediaItemUrl, className: stack('link', styles.link), target: '_blank', children: "cookie" }), ", \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0430\u0439\u0442\u043E\u043C \u0431\u044B\u043B\u043E \u0443\u0434\u043E\u0431\u043D\u043E. "] }), _jsx("button", { onClick: clickHandler, className: stack('button-small', styles.button), children: "\u0425\u043E\u0440\u043E\u0448\u043E" })] }) }) }));
};
export default Cookies;
