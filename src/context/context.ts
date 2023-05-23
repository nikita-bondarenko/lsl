import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {MenuQuery} from "../types/menu";
import {CommonSectionsQuery} from "../types/commonSections";
import {BlogsQuery} from "../types/blogs";
import {TrainingsQuery} from "../types/trainings";
import {MainPageQuery} from "../types/mainpage";
import {PublicationsQuery} from "../types/publications";

export type GlobalContextType = {
    count: number
    setCount: Dispatch<SetStateAction<number>>

    isLoading: boolean
    setIsLoading: Dispatch<SetStateAction<boolean>>

    isMenuLoading: boolean
    setIsMenuLoading: Dispatch<SetStateAction<boolean>>

    isHeaderLoading: boolean
    setHeaderLoading: Dispatch<SetStateAction<boolean>>
    isPageLoading: boolean
    setPageLoading: Dispatch<SetStateAction<boolean>>
    isFooterLoading: boolean
    setFooterLoading: Dispatch<SetStateAction<boolean>>
    menu: MenuQuery | undefined
    setMenu: Dispatch<SetStateAction<MenuQuery | undefined>>,
    commonSections: CommonSectionsQuery | undefined
    setCommonSections: Dispatch<SetStateAction<CommonSectionsQuery | undefined>>,
    mainPageData: MainPageQuery | undefined
    setMainPageData: Dispatch<SetStateAction<MainPageQuery | undefined>>,
    blogs: BlogsQuery | undefined
    setBlogs: Dispatch<SetStateAction<BlogsQuery | undefined>>,
    trainings: TrainingsQuery | undefined
    setTrainings: Dispatch<SetStateAction<TrainingsQuery | undefined>>,
    publications: PublicationsQuery | undefined
    setPublications: Dispatch<SetStateAction<PublicationsQuery | undefined>>

    title: string | undefined
    setTitle: Dispatch<SetStateAction<string | undefined>>

    description: string | undefined
    setDescription: Dispatch<SetStateAction<string | undefined>>

    isNavModalOpen: boolean
    setIsNavModalOpen: Dispatch<SetStateAction<boolean>>

    isMobile: boolean
}


export const globalState = (): GlobalContextType => {
    const [count, setCount] = useState<number>(0)
    const [menu, setMenu] = useState<MenuQuery>()
    const [commonSections, setCommonSections] = useState<CommonSectionsQuery>()
    const [mainPageData, setMainPageData] = useState<MainPageQuery>()
    const [blogs, setBlogs] = useState<BlogsQuery>()
    const [trainings, setTrainings] = useState<TrainingsQuery>()
    const [publications, setPublications] = useState<PublicationsQuery>()
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isMenuLoading, setIsMenuLoading] = useState<boolean>(true)
    const [isHeaderLoading, setHeaderLoading] = useState<boolean>(true)
    const [isFooterLoading, setFooterLoading] = useState<boolean>(true)
    const [isPageLoading, setPageLoading] = useState<boolean>(true)
    const [isNavModalOpen, setIsNavModalOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        setIsLoading(isMenuLoading || isHeaderLoading || isFooterLoading || isPageLoading)
    }, [isMenuLoading, isHeaderLoading, isFooterLoading, isPageLoading])

    useEffect(() => {
        setIsMobile(document.body.clientWidth < 1024)
    }, [])

    return {
        count,
        setCount,
        blogs,
        menu,
        setMenu,
        mainPageData,
        setMainPageData,
        commonSections,
        setCommonSections,
        publications,
        setPublications,
        setBlogs,
        setTrainings,
        trainings,
        title,
        setTitle,
        description,
        setDescription,
        isLoading,
        setIsLoading,
        isFooterLoading,
        setFooterLoading,
        isHeaderLoading,
        setHeaderLoading,
        isMenuLoading,
        setIsMenuLoading, setPageLoading, isPageLoading, isNavModalOpen, setIsNavModalOpen, isMobile
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
