import {useEffect, useState} from "react";
import {useGlobalContext} from "../context/context";
import {CommonSectionsNode} from "../types/commonSections";


export const useCommonSection = (slug: string) => {
    const [section, setSection] = useState<CommonSectionsNode>()
    const {commonSections} = useGlobalContext()

    useEffect(() => {
        if (commonSections) {
            const item = commonSections?.commonSections?.nodes?.find(el => el.slug === slug)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            item &&  setSection(item)
        }
    } , [commonSections])
    return [section]
}
