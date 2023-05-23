import { useEffect, useState } from "react";
export const useSortNav = (arg) => {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        if (arg) {
            setArr(arg.sort((a, b) => a.order > b.order ? 1 : -1));
        }
    }, [arg]);
    return [arr];
};
