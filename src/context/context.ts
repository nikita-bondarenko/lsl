import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";

import {Data,  PagesNode} from "../types/data";

export type GlobalContextType = {


    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>

    title: string | undefined
    setTitle: Dispatch<SetStateAction<string | undefined>>

    description: string | undefined
    setDescription: Dispatch<SetStateAction<string | undefined>>

    isNavModalOpen: boolean
    setIsNavModalOpen: Dispatch<SetStateAction<boolean>>

    isMobile: boolean,
    historyLength: number,
    setHistoryLength: Dispatch<SetStateAction<number>>,
    data: Data | undefined,
    setData: Dispatch<SetStateAction<Data | undefined>>,
    mainPage: PagesNode | undefined,
    setMainPage: Dispatch<SetStateAction<PagesNode | undefined>>,
    contactPage: PagesNode | undefined,
    setContactPage: Dispatch<SetStateAction<PagesNode | undefined>>
}


export const globalState = (): GlobalContextType => {
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isNavModalOpen, setIsNavModalOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [historyLength, setHistoryLength] = useState<number>(0)
    const [data, setData] = useState<Data>()
    const [mainPage, setMainPage] = useState<PagesNode>()
    const [contactPage, setContactPage] = useState<PagesNode>()


    useEffect(() => {
        setIsMobile(document.body.clientWidth < 1024)

    }, [])

    useEffect(() => {setHistoryLength(prev => prev+ 1)}, [location.href])



    return {
        title,
        setTitle,
        description,
        setDescription,
        isLoading,
        setIsLoading,
        isNavModalOpen,
        setIsNavModalOpen,
        isMobile,
       historyLength, setHistoryLength, setData, data, setMainPage, mainPage, setContactPage, contactPage
    }
}


export const GlobalContext = createContext<GlobalContextType | null>(null)

export const useGlobalContext = () => {
    const currentContext = useContext(GlobalContext);

    if (!currentContext) {
        throw new Error(
            "GlobalContext has to be used within <GlobalContext.Provider>"
        );
    }

    return currentContext;
};
