import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Modal.module.css';
import { stack } from "../../../hooks/useClassName";
const Modal = ({ children, open, setOpen }) => {
    return (_jsx("div", { onClick: () => setOpen(false), className: stack(styles.modal, open && styles.open), children: _jsx("div", { className: stack(styles.body, 'container'), children: _jsx("div", { className: styles.content, children: children }) }) }));
};
export default Modal;
