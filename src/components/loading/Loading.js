import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Loading.module.css';
import { useGlobalContext } from "../../context/context";
import { stack } from "../../hooks/useClassName";
const Loading = () => {
    const { isLoading } = useGlobalContext();
    return (_jsx("div", { className: stack(styles.ldsHeart, !isLoading && styles.disappear), children: _jsx("div", {}) }));
};
export default Loading;
