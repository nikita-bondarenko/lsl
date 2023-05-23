import {MenuNode} from "../types/menu";
import {useEffect, useState} from "react";

export const useSortNav = (arg: MenuNode[] | undefined) => {
    const [arr, setArr] = useState<MenuNode[]>([])
    useEffect(() => {
        if(arg) {setArr(arg.sort((a,b) => a.order > b.order ? 1 : -1))}
    }, [arg])
    return [arr]
}
