import React, {Dispatch, ReactElement, ReactNode, SetStateAction} from 'react';
import styles from './Modal.module.css'
import {stack} from "../../../hooks/useClassName";
import {useGlobalContext} from "../../../context/context";

type ModalProps = {
    open: boolean,
    children: ReactElement |ReactNode

    setOpen: Dispatch<SetStateAction<boolean>>
}
const Modal = ({children, open, setOpen} : ModalProps) => {
    const {isNewContainer} = useGlobalContext()
    return (
        <div onClick={() => setOpen(false)} className={stack(styles.modal, open && styles.open)}>
            <div className={stack(styles.body,isNewContainer ? 'container-new' : 'container')}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
