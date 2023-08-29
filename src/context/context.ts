import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";

import {AllBlogNode, Data, PagesNode} from "../types/data";

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
    historyPage: PagesNode | undefined,
    setHistoryPage: Dispatch<SetStateAction<PagesNode | undefined>>,
    contactPage: PagesNode | undefined,
    setContactPage: Dispatch<SetStateAction<PagesNode | undefined>>,
    blogPage: PagesNode | undefined,
    setBlogPage: Dispatch<SetStateAction<PagesNode | undefined>>,
    trainingsPage: PagesNode | undefined,
    setTrainingsPage: Dispatch<SetStateAction<PagesNode | undefined>>,
    blogPostPage: AllBlogNode | undefined,
    setBlogPostPage: Dispatch<SetStateAction<AllBlogNode | undefined>>,
    isNewContainer: boolean,
    setIsNewContainer: Dispatch<SetStateAction<boolean>>
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
    const [historyPage, setHistoryPage] = useState<PagesNode>()
    const [blogPage, setBlogPage] = useState<PagesNode>()
    const [blogPostPage, setBlogPostPage] = useState<AllBlogNode>()
    const [trainingsPage, setTrainingsPage] = useState<PagesNode>()
    const [isNewContainer, setIsNewContainer] = useState<boolean>(false)

    useEffect(() => {
        setIsMobile(document.body.clientWidth < 1024)

    }, [])

    useEffect(() => {
        setHistoryLength(prev => prev + 1)
    }, [location.href])


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
        historyLength,
        setHistoryLength,
        setData,
        data,
        setMainPage,
        mainPage,
        setContactPage,
        contactPage,
        blogPage,
        setBlogPage,
        historyPage,
        setHistoryPage,
        setTrainingsPage,
        trainingsPage, blogPostPage, setBlogPostPage, isNewContainer, setIsNewContainer
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
