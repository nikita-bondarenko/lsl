import { jsx as _jsx } from "react/jsx-runtime";
import styles from './FixedLayer.module.css';
const FixedLayer = ({ children }) => {
    return (_jsx("div", { id: 'layer', className: styles.body, children: children }));
};
export default FixedLayer;
