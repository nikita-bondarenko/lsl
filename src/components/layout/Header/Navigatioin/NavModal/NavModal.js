import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import Modal from "../../../Modal/Modal";
import { useGlobalContext } from "../../../../../context/context";
import { stack } from "../../../../../hooks/useClassName";
import styles from './NavModal.module.css';
import { Navigation } from "../../Header";
const NavModal = () => {
    const { isNavModalOpen, setIsNavModalOpen } = useGlobalContext();
    useEffect(() => {
        console.log(isNavModalOpen);
    }, [isNavModalOpen]);
    return (_jsx(Modal, { open: isNavModalOpen, setOpen: setIsNavModalOpen, children: _jsx("div", { className: stack(styles.body, 'container'), children: _jsx(Navigation, {}) }) }));
};
export default NavModal;
