import { createContext, useContext, useEffect, useState } from "react";
export const globalState = () => {
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState();
    const [commonSections, setCommonSections] = useState();
    const [mainPageData, setMainPageData] = useState();
    const [blogs, setBlogs] = useState();
    const [trainings, setTrainings] = useState();
    const [publications, setPublications] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuLoading, setIsMenuLoading] = useState(true);
    const [isHeaderLoading, setHeaderLoading] = useState(true);
    const [isFooterLoading, setFooterLoading] = useState(true);
    const [isPageLoading, setPageLoading] = useState(true);
    const [isNavModalOpen, setIsNavModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsLoading(isMenuLoading || isHeaderLoading || isFooterLoading || isPageLoading);
    }, [isMenuLoading, isHeaderLoading, isFooterLoading, isPageLoading]);
    useEffect(() => {
        setIsMobile(document.body.clientWidth < 1024);
    }, []);
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
    };
};
export const GlobalContext = createContext(null);
export const useGlobalContext = () => {
    const currentContext = useContext(GlobalContext);
    if (!currentContext) {
        throw new Error("GlobalContext has to be used within <GlobalContext.Provider>");
    }
    return currentContext;
};
