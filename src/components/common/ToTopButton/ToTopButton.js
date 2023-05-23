import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ToTopButton.module.css';
import { stack } from "../../../hooks/useClassName";
const ToTopButton = ({ className }) => {
    const clickHandler = () => {
        scrollTo(0, 0);
    };
    return (_jsxs("button", { onClick: clickHandler, className: stack('link', styles.body, className), children: [_jsx("p", { className: styles.text, children: "\u041D\u0430\u0432\u0435\u0440\u0445" }), _jsx("img", { src: "/image/arrow-up.png", className: styles.icon, alt: "" })] }));
};
export default ToTopButton;
