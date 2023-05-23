import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
export const useCommonSection = (slug) => {
    const [section, setSection] = useState();
    const { commonSections } = useGlobalContext();
    useEffect(() => {
        if (commonSections) {
            const item = commonSections?.commonSections?.nodes?.find(el => el.slug === slug);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            item && setSection(item);
        }
    }, [commonSections]);
    return [section];
};
